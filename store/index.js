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
    markerCoords: [
      { lat: 48.475, lng: 35.03 },
      { lat:  48.49, lng: 35.06 }
    ],

    map: null,
    bounds: null,
    markers: []
  },
  mutations: {
    setMap(state, payload) {
      state.map = payload;
    },
    setBounds(state, payload) {
      state.bounds = payload;
    },
    addMarker(state, payload) {
      state.markers.push(payload);
    }
  },
  actions: {
    setMap({commit}, payload) {
      commit('setMap', payload);
    },
    setBounds({commit}, payload) {
      commit('setBounds', payload);
    },
    addMarker({commit}, payload) {
      commit('addMarker', payload);
    }
  }
});

export default initStore;