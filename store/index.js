import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const initStore = () => new Vuex.Store({
  state: {
    appTitle: 'Главная',

    menuItems: [
      { title: 'Карта', path: '/map', icon: 'map' },
      { title: 'Каталог', path: '/animals/1', icon: 'info' }
    ],

    reservationCategories: [
      { title: 'Животные', icon: 'bug_report', path: '/animals/1'},
      { title: 'Растения', icon: 'local_florist', path: '/plants/1'},
      { title: 'Почва', icon: 'landscape', path: '/soils/1'}
    ],

    mapId: 'regionMap',
    centerCoords: { 
      lat: 48.475, 
      lng: 35.03 
    },

    polygons: [
      {
        color: '#0000FF',
        previewTitle: 'Первый',
        pageLink: '/first-region',
        coords: [
          { lat: 48.469, lng: 35.050 },
          { lat: 48.458, lng: 35.042 },
          { lat: 48.473, lng: 34.998 },
          { lat: 48.4871, lng: 34.9973 },
          { lat: 48.4837, lng: 35.0197 },
          { lat: 48.4769, lng: 35.0387 }
        ]
      },
      {
        color: '#FF0000',
        previewTitle: 'Второй',
        pageLink: '/second-region',
        coords: [
          { lat: 48.4941, lng: 35.0099 },
          { lat: 48.5052, lng: 35.0224 },
          { lat: 48.4945, lng: 35.0699 },
          { lat: 48.4811, lng: 35.0599 },
          { lat: 48.4850, lng: 35.0552},
          { lat: 48.4877, lng: 35.0487},
          { lat: 48.4907, lng: 35.0371 }
        ]
      }
    ],

    filteredPolygon: null,

    animals: [
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      },
      {
        image: 'sample1.jpg',
        title: 'Вид животного',
        description: 'Описание описание описание описание описание описание'
      }
    ],

    filteredAnimals: null,
    animalPages: null,

    map: null,
    bounds: null,
    infoWindow: null
  },
  mutations: {
    setMap(state, payload) {
      state.map = payload;
    },
    setBounds(state, payload) {
      state.bounds = payload;
    },
    setInfoWindow(state, payload) {
      state.infoWindow = payload;
    },
    setRegionFilteredPolygon(state, payload) {
      state.filteredPolygon = payload;
    },
    setFilteredAnimals(state, payload) {
      state.filteredAnimals = payload;
    },
    setAnimalPages(state, payload) {
      state.animalPages = payload;
    }
  },
  actions: {
    setMap({commit}, payload) {
      commit('setMap', payload);
    },
    setBounds({commit}, payload) {
      commit('setBounds', payload);
    },
    setInfoWindow({commit}, payload) {
      commit('setInfoWindow', payload);
    },
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
    }
  }
});

export default initStore;