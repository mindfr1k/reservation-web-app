import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const initStore = () => new Vuex.Store({
  state: {
    appTitle: 'Проект Рыжего',
    menuItems: [
      { title: 'Карта', path: '/map', icon: 'map'}
    ]
  },
  mutations: {

  },
  actions: {

  }
});

export default initStore;