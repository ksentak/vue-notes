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
    showNoteDialog: false,
    showColorMenu: false
  },
  mutations: {
    newNote: (state, note) => state.notes.unshift(note),
    setNotes: (state, notes) => (state.notes = notes),
    editNote: (state, updatedNote) => {
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes.splice(index, 1, updatedNote);
      }
    },
    removeNote: (state, id) => {
      const newArray = state.notes.filter((note) => note.id != id);
      state.notes = newArray;
      console.log(state.notes);
    },
    setSelectedNote: (state, payload) => (state.selectedNote = payload),
    setNoteField: (state, payload) => {
      state.selectedNote = {
        ...state.selectedNote,
        [payload.name]: payload.value
      };
    },
    setShowNoteDialog: (state, payload) => (state.showNoteDialog = payload),
    setShowColorMenu: (state, payload) => (state.showColorMenu = payload)

    // showSnackbar: (state, payload) => (state.snackbar = payload)
  },
  actions: {
    // Create
    async createNote({ commit }, data) {
      const note = await db.addNote(data);
      commit('newNote', note);
    },
    // Read
    async fetchNotes({ commit }) {
      const notes = await db.getNotes();
      commit('setNotes', notes);
    },
    // Update
    async updateNote({ commit }, note) {
      const updatedNote = await db.updateNote(note);
      commit('editNote', updatedNote);
    },
    // Delete
    async discardNote({ commit }, id) {
      const discardedNoteId = await db.deleteNote(id);
      commit('removeNote', discardedNoteId);
    }
  },
  getters: {
    getAllNotes: (state) => state.notes,
    getSelectedNote: (state) => state.selectedNote,
    getShowNoteDialog: (state) => state.showNoteDialog,
    getShowColorMenu: (state) => state.showColorMenu
  }
});
