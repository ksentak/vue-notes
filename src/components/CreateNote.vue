<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6" xl="4">
      <v-card>
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
          <!-- <ColorPickerMenu @color-selected="colorSelected" :selected="newNote.color" /> -->
          <v-spacer></v-spacer>
          <v-btn text @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import db from '@/firebase/firebase';
export default {
  name: 'CreateNote',
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
    async createNote() {
      const notes = db.collection('notes');
      const newDoc = await notes.add(this.newNote);
      return {
        id: newDoc.id,
        ...this.newNote
      };
    },
    async close() {
      this.hideTitleFieldAndActions();

      if (this.newNote.title || this.newNote.content) {
        await this.createNote(this.newNote);
        this.showSnackbar({
          open: true,
          text: 'Note saved',
          color: 'success'
        });
      }

      this.note = {
        title: '',
        content: '',
        color: 'none'
      };
    },
    showTitleFieldAndActions() {
      this.titleFieldVisible = true;
      this.actionsVisible = true;
    },
    hideTitleFieldAndActions() {
      this.titleFieldVisible = false;
      this.actionsVisible = false;
    }
  }
};
</script>
