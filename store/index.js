import Vue from 'vue'
import Vuex from 'vuex'

import polygons from './polygons'
import animals from './animals'
import borderPolyline from './border/borderPolyline'
import zonePolylines from './border/zonePolylines'

Vue.use(Vuex);

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

    mapId: 'regionMap',
    mapOptions: {
      maxZoom: 15,
      mapTypeId: 'satellite'
    },

    borderPolyline,
    zonePolylines,

    polygons,
    checkedPolygons: [],
    filteredPolygon: null,

    animals,
    filteredAnimals: null,
    animalPages: null
  },
  mutations: {
    setRegionFilteredPolygon(state, payload) {
      state.filteredPolygon = payload;
    },
    setFilteredAnimals(state, payload) {
      state.filteredAnimals = payload;
    },
    setAnimalPages(state, payload) {
      state.animalPages = payload;
    },
    setCheckedProperty(state, payload) {
      const checkbox = state.reservationCategories[payload];
      checkbox.isChecked = !checkbox.isChecked;
    },
    setCheckedPolygons(state, payload) {
      state.checkedPolygons = payload;
    }
  },
  actions: {
    filterPolygonByRegion({commit, state}, payload) {
      const filteredPolygon = state.polygons.find(polygon => {
        const { pageLink } = polygon;
        return pageLink === `/${payload}`;
      });
      commit('setRegionFilteredPolygon', filteredPolygon);
    },
    filterAnimalsByPage({commit, state}, payload) {
      payload = parseInt(payload);
      commit('setFilteredAnimals', state.animals.slice((payload - 1) * 9, payload * 9));
    },
    setAnimalPages({commit, state}) {
      const pages = Math.floor(state.animals.length / 9) + 1;
      commit('setAnimalPages', pages);
    },
    filterCheckboxes({commit}, payload) {
      commit('setCheckedProperty', payload);
    },
    filterCheckedPolygons({commit, state}) {
      const filteredBoxes = state.reservationCategories.filter(box => {
        return box.isChecked === true
      });
      const result = [];
      
      for (let box of filteredBoxes) {
        const filteredPolygon = state.polygons.filter(polygon => {
          return polygon.type === box.id;
        })
        result.push(...filteredPolygon)
      }
      commit('setCheckedPolygons', result);
    }
  }
});

export default initStore;