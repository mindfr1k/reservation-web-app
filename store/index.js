import Vue from 'vue'
import Vuex from 'vuex'

import superagent from 'superagent'

import borderPolyline from './border/borderPolyline'

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
      { id: 'soils', title: 'Тераси', icon: 'landscape', path: '/soils/1' }
    ],
    currentCategory: 'animals',

    isSignedIn: false,

    mapId: 'regionMap',
    mapOptions: {
      maxZoom: 15,
      mapTypeId: 'satellite'
    },

    borderPolyline,

    polygons: [],
    checkedPolygons: [],
    inhabitants: [],

    filteredObjects: null,
    categoryPages: 1,

    filteredNews: null,
    newsPages: 1
  },
  mutations: {
    setFilteredObjects(state, payload) {
      state.filteredObjects = payload
    },
    setCategoryPages(state, payload) {
      state.categoryPages = payload
    },
    setFilteredNews(state, payload) {
      state.filteredNews = payload
    },
    setNewsPages(state, payload) {
      state.newsPages = payload
    },
    setCurrentCategory(state, payload) {
      state.currentCategory = payload
    },
    setCheckedProperty(state, payload) {
      for (let category in state.reservationCategories) {
        const box = state.reservationCategories[category]
        if (+category === payload) {
          box.isChecked = !box.isChecked
        }
        else {
          box.isChecked = false
        }
      }
    },
    setCheckedPolygons(state, payload) {
      state.checkedPolygons = payload
    },
    setIsSignedIn(state, payload) {
      state.isSignedIn = payload
    },
    setPolygons(state, payload) {
      state.polygons = payload
    },
    setInhabitants(state, payload) {
      state.inhabitants = payload
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
    async getNewsPagesAmount({commit}) {
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/news/amount`)
      const amount = response.text 
        ? JSON.parse(response.text).newsAmount
        : 1
      const flooredAmount = amount % 6 === 0
      ? ~~(amount / 6)
      : ~~(amount / 6) + 1
      commit('setNewsPages', flooredAmount)
    },
    async filterObjectsByPage({commit}, payload) {
      payload.page = parseInt(payload.page)
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/categories?categoryName=${payload.categoryName}&limit=12&skip=${(payload.page - 1) * 12}`)
      commit('setFilteredObjects', JSON.parse(response.text))
    },
    async filterNewsByPage({commit}, payload) {
      payload.page = parseInt(payload.page)
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/news?limit=6&skip=${(payload.page - 1) * 6}`)
      commit('setFilteredNews', JSON.parse(response.text))
    },
    async deleteObject({}, payload) {
      await superagent
        .delete(`http://${process.env.HOST}:${process.env.PORT}/categories/${payload.id}`)
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .send(payload.body)
    },
    async deleteInhabitant({}, payload) {
      await superagent
        .delete(`http://${process.env.HOST}:${process.env.PORT}/polygons/${payload.id}/inhabitants`)
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
    async postInhabitant({}, payload) {
      await superagent
        .post(`http://${process.env.HOST}:${process.env.PORT}/polygons/${payload.id}/inhabitants`)
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        .send(payload.body)
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
    async getPolygons({commit}) {
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/polygons`)
      commit('setPolygons', JSON.parse(response.text))
    },
    async getInhabitants({commit}, payload) {
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/polygons/${payload.id}/inhabitants`)
      commit('setInhabitants', JSON.parse(response.text))
    },
    setCurrentCategory({commit}, payload) {
      commit('setCurrentCategory', payload)
    },
    setCategoryPages({commit}, payload) {
      commit('setCategoryPages', payload)
    },
    filterCheckedPolygons({commit, state}, payload) {
      commit('setCheckedProperty', payload)
      const result = []
      const filteredPolygons = state.polygons.filter(polygon => {
        return polygon.type === state.reservationCategories[payload].id
      })
      result.push(...filteredPolygons)
      commit('setCheckedPolygons', result)
    }
  }
})

export default initStore;