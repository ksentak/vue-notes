import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    selectedNote: {},
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
    removeNote: (state, id) => {
      const newArray = state.notes.filter((note) => note.id != id);
      state.notes = newArray;
      console.log(state.notes);
    },
    setSelectedNote: (state, payload) => (state.selectedNote = payload),
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
    },
    async discardNote({ commit }, id) {
      const discardedNoteId = await db.deleteNote(id);
      commit('removeNote', discardedNoteId);
    }
  },
  getters: {
    getAllNotes: (state) => state.notes,
    getShowNoteDialog: (state) => state.showNoteDialog,
    getSelectedNote: (state) => state.selectedNote
  }
});
