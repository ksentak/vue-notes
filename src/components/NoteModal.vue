<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
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
        <!-- <ColorPickerMenu @color-selected="colorSelected" :selected="selectedNote.color" /> -->
        <v-spacer></v-spacer>
        <v-btn text @click="cancelDialog()">Close</v-btn>
        <v-btn text @click="updateNote()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NoteModal',
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
      // set: function(payload) {

      //   this.$store.commit('updateSelectedNote', payload);
      // }
    }
  },
  methods: {
    cancelDialog() {
      this.$store.commit('setShowNoteDialog', false);
    },
    async updateNote() {
      this.loading = true;
      const editedNote = this.selectedNote;
      console.log('editedNote');
      console.log(editedNote);
      await this.$store.dispatch('updateNote', editedNote);
      this.loading = false;
      this.cancelDialog();
    },
    async deleteNote() {
      this.deleteLoading = true;
      const selectedNoteId = await this.$store.getters.getSelectedNote.id;
      await this.$store.dispatch('discardNote', selectedNoteId);
      this.deleteLoading = false;
      this.cancelDialog();
    }
  }
};
</script>
