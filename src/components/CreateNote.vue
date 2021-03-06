<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6" xl="4" v-click-outside="closeMenu">
      <v-card :color="newNote.color">
        <div class="pa-2">
          <v-text-field
            v-model="newNote.title"
            v-show="titleFieldVisible"
            label="Title"
            single-line
            flat
            solo
            background-color="transparent"
            maxlength="30"
            counter
          ></v-text-field>
          <v-textarea
            v-model="newNote.content"
            @focus="showTitleFieldAndActions"
            :rows="2"
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
        <v-card-actions v-show="actionsVisible">
          <ColorPicker @color-selected="colorSelected" :selected="newNote.color" />
          <v-spacer></v-spacer>
          <v-btn text @click="close()">Close</v-btn>
          <v-btn text @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ColorPicker from './ColorPicker';

export default {
  name: 'CreateNote',
  components: {
    ColorPicker
  },
  data: () => ({
    newNote: {
      color: 'none',
      content: '',
      title: ''
    },
    titleFieldVisible: false,
    actionsVisible: false
  }),
  methods: {
    async createNote(newNote) {
      await this.$store.dispatch('createNote', newNote);
    },
    async save() {
      if (this.newNote.title || this.newNote.content) {
        await this.createNote(this.newNote);
        this.hideTitleFieldAndActions();
        this.resetForm();

        const payload = { open: true, text: 'Note Saved', color: 'success' };
        this.changeSnackbar(payload);
      } else {
        const payload = { open: true, text: 'Uh oh something went wrong...', color: 'error' };
        this.changeSnackbar(payload);
      }
    },
    close() {
      this.hideTitleFieldAndActions();
      this.resetForm();
    },
    resetForm() {
      this.newNote = {
        title: '',
        content: '',
        color: 'none'
      };
    },
    changeSnackbar(payload) {
      this.$store.commit('showSnackbar', payload);
    },
    showTitleFieldAndActions() {
      this.titleFieldVisible = true;
      this.actionsVisible = true;
    },
    hideTitleFieldAndActions() {
      this.titleFieldVisible = false;
      this.actionsVisible = false;
    },
    colorSelected(color) {
      this.newNote.color = color;
    },
    closeMenu() {
      if (!this.$store.getters.getIsColorMenuOpen) {
        this.close();
      }
    }
  }
};
</script>
