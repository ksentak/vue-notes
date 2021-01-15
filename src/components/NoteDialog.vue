<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card :color="selectedNote.color">
      <div class="pa-2">
        <v-text-field
          v-model="selectedNote.title"
          label="Title"
          single-line
          flat
          solo
          maxlength="30"
          counter
          background-color="transparent"
        ></v-text-field>
        <v-textarea
          v-model="selectedNote.content"
          auto-grow
          flat
          solo
          label="Take a note..."
          single-line
          maxlength="100"
          counter
          background-color="transparent"
        ></v-textarea>
      </div>
      <v-card-actions>
        <v-btn icon @click="deleteNote()" :loading="deleteLoading">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
        <ColorPicker @color-selected="colorSelected" :selected="selectedNote.color" />
        <v-spacer></v-spacer>
        <v-btn text @click="cancelDialog()">Close</v-btn>
        <v-btn text @click="updateNote()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ColorPicker from './ColorPicker';

export default {
  name: 'NoteDialog',
  components: {
    ColorPicker
  },
  data: () => ({
    loading: false,
    deleteLoading: false
  }),
  computed: {
    dialog: {
      get: function() {
        return this.$store.getters.getShowNoteDialog;
      },
      set: function(payload) {
        this.$store.commit('setShowNoteDialog', payload);
      }
    },
    selectedNote: {
      get: function() {
        return this.$store.getters.getSelectedNote;
      }
    }
  },
  methods: {
    async updateNote() {
      this.loading = true;
      const editedNote = this.selectedNote;
      await this.$store.dispatch('updateNote', editedNote);
      this.loading = false;
      this.cancelDialog();
      const payload = { open: true, text: 'Note Updated', color: 'success' };
      this.changeSnackbar(payload);
    },
    async deleteNote() {
      this.deleteLoading = true;
      const selectedNoteId = await this.$store.getters.getSelectedNote.id;
      await this.$store.dispatch('discardNote', selectedNoteId);
      this.deleteLoading = false;
      this.cancelDialog();
      const payload = { open: true, text: 'Note Deleted', color: 'error' };
      this.changeSnackbar(payload);
    },
    cancelDialog() {
      this.$store.commit('setShowNoteDialog', false);
    },
    colorSelected(color) {
      const newColor = {
        name: 'color',
        value: color
      };
      this.$store.commit('setNoteField', newColor);
    },
    changeSnackbar(payload) {
      this.$store.commit('showSnackbar', payload);
    }
  }
};
</script>
