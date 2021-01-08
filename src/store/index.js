import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    setNotes: (state, notes) => (state.notes = notes)
  },
  actions: {
    async fetchNotes({ commit }) {
      const notes = await db.getNotes();
      commit('setNotes', notes);
    }
  },
  getters: {
    getAllNotes: (state) => state.notes
  }
});
