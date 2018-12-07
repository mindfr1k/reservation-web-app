import Vue from 'vue'
import Vuex from 'vuex'

import superagent from 'superagent'

import polygons from './polygons'
import borderPolyline from './border/borderPolyline'
import zonePolylines from './border/zonePolylines'

Vue.use(Vuex)

const initStore = () => new Vuex.Store({
  state: {
    appTitle: 'Головна',
    menuItems: [
      { title: 'Мапа', path: '/map', icon: 'map' },
      { title: 'Каталог', path: '/animals/1', icon: 'info' }
    ],
    reservationCategories: [
      { id: 'animals', title: 'Тварини', icon: 'bug_report', path: '/animals/1' },
      { id: 'plants', title: 'Рослини', icon: 'local_florist', path: '/plants/1' },
      { id: 'soils', title: 'Грунти', icon: 'landscape', path: '/soils/1' }
    ],
    currentCategory: 'animals',

    isSignedIn: false,

    mapId: 'regionMap',
    mapOptions: {
      maxZoom: 15,
      mapTypeId: 'satellite'
    },

    borderPolyline,
    zonePolylines: [],

    polygons,
    checkedPolygons: [],

    filteredObjects: null,
    categoryPages: 1
  },
  mutations: {
    setFilteredObjects(state, payload) {
      state.filteredObjects = payload
    },
    setCategoryPages(state, payload) {
      state.categoryPages = payload
    },
    setCurrentCategory(state, payload) {
      state.currentCategory = payload
    },
    setCheckedProperty(state, payload) {
      for (let category in state.reservationCategories) {
        if (+category === payload) {
          state.reservationCategories[category].isChecked = true
        }
        else {
          state.reservationCategories[category].isChecked = false
        }
      }
    },
    setCheckedPolygons(state, payload) {
      state.checkedPolygons = payload
    },
    setZonePolylines(state, payload) {
      state.zonePolylines = payload
    },
    setIsSignedIn(state, payload) {
      state.isSignedIn = payload
    }
  },
  actions: {
    async getPagesAmount({commit}, payload) {
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/categories/amount?categoryName=${payload.categoryName}`)
      const amount = response.text 
        ? JSON.parse(response.text).categoryAmount 
        : 1
      const flooredAmount = amount % 12 === 0
      ? ~~(amount / 12)
      : ~~(amount / 12) + 1
      commit('setCategoryPages', flooredAmount)
    },
    async filterObjectsByPage({commit}, payload) {
      payload.page = parseInt(payload.page)
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/categories?categoryName=${payload.categoryName}&limit=12&skip=${(payload.page - 1) * 12}`)
      commit('setFilteredObjects', JSON.parse(response.text))
    },
    async deleteObject({}, payload) {
      await superagent
        .delete(`http://${process.env.HOST}:${process.env.PORT}/categories/${payload.id}`)
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .send(payload.body)
    },
    async postObject({}, payload) {
      await superagent
        .post(`http://${process.env.HOST}:${process.env.PORT}/categories`)
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .field('categoryName', payload.categoryName)
        .field('title', payload.title)
        .field('preview', payload.preview)
        .field('description', payload.description)
        .attach('image', payload.image)
    },
    async patchObject({}, payload) {
      await superagent
        .patch(`http://${process.env.HOST}:${process.env.PORT}/categories/${payload.id}`)
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .send(payload.body)
    },
    async signIn({}, payload) {
      const response = await superagent
        .post(`http://${process.env.HOST}:${process.env.PORT}/users/signin`)
        .send(payload)
      localStorage.setItem('token', response.body.token)
    },
    signOut({commit}) {
      localStorage.removeItem('token')
      commit('setIsSignedIn', false)
    },
    async checkAuth({commit}) {
      try {
        const response = await superagent
          .get(`http://${process.env.HOST}:${process.env.PORT}/users/checkAccess`)
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        commit('setIsSignedIn', response.text === 'true')
      }
      catch (err) {
        commit('setIsSignedIn', false)
      }
    },
    setCurrentCategory({commit}, payload) {
      commit('setCurrentCategory', payload)
    },
    setCategoryPages({commit}, payload) {
      commit('setCategoryPages', payload)
    },
    filterCategories({commit}, payload) {
      commit('setCheckedProperty', payload)
    },
    filterCheckedPolygons({commit, state}, payload) {
      const result = []
      const filteredPolygons = state.polygons.filter(polygon => {
        return polygon.type === state.reservationCategories[payload].id
      })
      result.push(...filteredPolygons)
      commit('setCheckedPolygons', result)
    },
    showZonePolylines({commit}) {
      commit('setZonePolylines', zonePolylines)
    }
  }
})

export default initStore;