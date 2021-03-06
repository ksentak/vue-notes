import Vue from 'vue';
import Vuex from 'vuex';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    selectedNote: {},
    showNoteDialog: false,
    isColorMenuOpen: false,
    snackbar: {
      open: false,
      color: '',
      text: ''
    }
  },
  mutations: {
    // Notes
    newNote: (state, note) => state.notes.unshift(note),
    setNotes: (state, notes) => (state.notes = notes),
    editNote: (state, updatedNote) => {
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes.splice(index, 1, updatedNote);
      }
    },
    removeNote: (state, id) => {
      const updatedNotes = state.notes.filter((note) => note.id !== id);
      state.notes = updatedNotes;
    },
    setSelectedNote: (state, payload) => (state.selectedNote = payload),
    setNoteField: (state, payload) => {
      state.selectedNote = {
        ...state.selectedNote,
        [payload.name]: payload.value
      };
    },
    // UI
    setShowNoteDialog: (state, payload) => (state.showNoteDialog = payload),
    setColorMenuOpen: (state, payload) => (state.isColorMenuOpen = payload),
    showSnackbar: (state, payload) => (state.snackbar = payload)
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
    // Notes
    getAllNotes: (state) => state.notes,
    getSelectedNote: (state) => state.selectedNote,
    // UI
    getShowNoteDialog: (state) => state.showNoteDialog,
    getIsColorMenuOpen: (state) => state.isColorMenuOpen,
    getSnackbar: (state) => state.snackbar
  }
});
