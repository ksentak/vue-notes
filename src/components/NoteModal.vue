<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <div class="pa-2">
        <v-text-field
          label="Title"
          single-line
          flat
          solo
          maxlength="30"
          counter
          background-color="transparent"
        ></v-text-field>
        <v-textarea
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
        <!-- <v-btn icon @click="deleteNote" :loading="deleteLoading">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn> -->
        <!-- <ColorPickerMenu @color-selected="colorSelected" :selected="selectedNote.color" /> -->
        <v-spacer></v-spacer>
        <!-- <v-btn text @click="setShowNoteDialog(false)">Close</v-btn> -->
        <!-- <v-btn text @click="saveNote" :loading="loading">Save</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NoteModal',
  computed: {
    dialog: {
      get: function() {
        return this.$store.getters.getShowNoteDialog;
      },
      set: function(payload) {
        this.$store.commit('setShowNoteDialog', payload);
      }
    }
  }
};
</script>
