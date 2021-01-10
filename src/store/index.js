import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    // snackbar: {
    //   open: false,
    //   color: '',
    //   text: ''
    // }
    showNoteDialog: false
  },
  mutations: {
    setNotes: (state, notes) => (state.notes = notes),
    newNote: (state, note) => state.notes.unshift(note),
    setShowNoteDialog: (state, payload) => (state.showNoteDialog = payload)
    // showSnackbar: (state, payload) => (state.snackbar = payload)
  },
  actions: {
    async fetchNotes({ commit }) {
      const notes = await db.getNotes();
      commit('setNotes', notes);
    },
    async createNote({ commit }, data) {
      const note = await db.addNote(data);
      commit('newNote', note);
    }
  },
  getters: {
    getAllNotes: (state) => state.notes,
    getShowNoteDialog: (state) => state.showNoteDialog
  }
});
