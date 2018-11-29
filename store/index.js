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

    isAdmin: true,

    mapId: 'regionMap',
    mapOptions: {
      maxZoom: 15,
      mapTypeId: 'satellite'
    },

    borderPolyline,
    zonePolylines: [],

    polygons,
    checkedPolygons: [],
    filteredPolygon: null,

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
    setIsAdmin(state, payload) {
      state.isAdmin = payload
    },
    setCheckedProperty(state, payload) {
      const checkbox = state.reservationCategories[payload]
      checkbox.isChecked = !checkbox.isChecked
    },
    setCheckedPolygons(state, payload) {
      state.checkedPolygons = payload
    },
    setZonePolylines(state, payload) {
      state.zonePolylines = payload;
    }
  },
  actions: {
    async filterObjectsByPage({commit}, payload) {
      payload.page = parseInt(payload.page)
      const response = await superagent
        .get(`http://${process.env.HOST}:${process.env.PORT}/categories?categoryName=${payload.categoryName}&limit=9&skip=${(payload.page - 1) * 9}`)
      commit('setFilteredObjects', JSON.parse(response.text))
    },
    async deleteObject({}, payload) {
      await superagent
        .delete(`http://${process.env.HOST}:${process.env.PORT}/categories/${payload.id}`)
        .send(payload.body)
    },
    async postObject({}, payload) {
      await superagent
        .post(`http://${process.env.HOST}:${process.env.PORT}/categories`)
        .field('categoryName', payload.categoryName)
        .field('title', payload.title)
        .field('preview', payload.preview)
        .field('description', payload.description)
        .attach('image', payload.image)
    },
    async patchObject({}, payload) {
      await superagent
        .patch(`http://${process.env.HOST}:${process.env.PORT}/categories/${payload.id}`)
        .send(payload.body)
    },
    isAdmin({commit}) {
      commit('setIsAdmin', false)
    },
    setCurrentCategory({commit}, payload) {
      commit('setCurrentCategory', payload)
    },
    setCategoryPages({commit}, payload) {
      commit('setCategoryPages', payload)
    },
    filterCheckboxes({commit}, payload) {
      commit('setCheckedProperty', payload)
    },
    filterCheckedPolygons({commit, state}) {
      const filteredBoxes = state.reservationCategories.filter(box => {
        return box.isChecked === true
      })
      const result = []
      
      for (let box of filteredBoxes) {
        const filteredPolygon = state.polygons.filter(polygon => {
          return polygon.type === box.id
        })
        result.push(...filteredPolygon)
      }
      commit('setCheckedPolygons', result)
    },
    triggerMenuSelected({commit}, payload) {
      if (payload) {
        commit('setZonePolylines', zonePolylines)
      }
      else {
        commit('setZonePolylines', [])
      }
    }
  }
})

export default initStore;