import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const initStore = () => new Vuex.Store({
  state: {
    appTitle: 'Проект Рыжего',
    menuItems: [
      { title: 'Карта', path: '/map', icon: 'map'}
    ],

    mapId: 'regionMap',
    centerCoords: { 
      lat: 48.475, 
      lng: 35.03 
    },
    polygonsCoords: [
      [
        { lat: 48.469, lng: 35.050 },
        { lat: 48.458, lng: 35.042 },
        { lat: 48.473, lng: 34.998 },
        { lat: 48.4871, lng: 34.9973 },
        { lat: 48.4837, lng: 35.0197 },
        { lat: 48.4769, lng: 35.0387 }
      ],
      [
        { lat: 48.4941, lng: 35.0099 },
        { lat: 48.5052, lng: 35.0224 },
        { lat: 48.4945, lng: 35.0699 },
        { lat: 48.4811, lng: 35.0599 },
        { lat: 48.4850, lng: 35.0552},
        { lat: 48.4877, lng: 35.0487},
        { lat: 48.4907, lng: 35.0371 }
      ]
    ],

    map: null,
    bounds: null,
    polygons: [],
    infoWindow: null
  },
  mutations: {
    setMap(state, payload) {
      state.map = payload;
    },
    setBounds(state, payload) {
      state.bounds = payload;
    },
    addPolygon(state, payload) {
      state.polygons.push(payload);
    },
    setInfoWindow(state, payload) {
      state.infoWindow = payload;
    }
  },
  actions: {
    setMap({commit}, payload) {
      commit('setMap', payload);
    },
    setBounds({commit}, payload) {
      commit('setBounds', payload);
    },
    addPolygon({commit}, payload) {
      commit('addPolygon', payload);
    },
    setInfoWindow({commit}, payload) {
      commit('setInfoWindow', payload);
    }
  }
});

export default initStore;