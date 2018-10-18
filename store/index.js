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

    borderPolyline: {
      strokeColor: '#000000',
      coords: [
        { lat: 48.511, lng: 34.986 },
        { lat: 48.489, lng: 34.957 },
        { lat: 48.464, lng: 34.985 },
        { lat: 48.450, lng: 35.061 },
        { lat: 48.473, lng: 35.091 },
        { lat: 48.502, lng: 35.078 },
        { lat: 48.511, lng: 34.986 }
      ]
    },
    animalPolygons: [
      {
        fillColor: '#0000FF',
        previewTitle: 'Первый животный регион',
        pageLink: '/first-animal',
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
        fillColor: '#FF0000',
        previewTitle: 'Второй животный регион',
        pageLink: '/second-animal',
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
    plantPolygons: [
      {
        fillColor: '#FFFF00',
        previewTitle: 'Первый растительный регион',
        pageLink: '/first-plant',
        coords: [
          { lat: 48.502, lng: 34.989 },
          { lat: 48.488, lng: 34.970 },
          { lat: 48.489, lng: 34.997 },
          { lat: 48.502, lng: 35.007 }
        ]
      }
    ],
    soilPolygons: [
      {
        fillColor: '#00FF00',
        previewTitle: 'Первый почвенный регион',
        pageLink: '/first-soil',
        coords: [
          { lat: 48.477, lng: 35.068 },
          { lat: 48.460, lng: 35.055 },
          { lat: 48.472, lng: 35.081 }
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
      const filteredPolygon = state.animalPolygons
        .concat(state.plantPolygons)
        .concat(state.soilPolygons)
        .find(polygon => {
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