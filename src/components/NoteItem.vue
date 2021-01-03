<template>
  <v-card outlined hover class="flex d-flex flex-column">
    <v-card-title>
      Hey
      <v-spacer></v-spacer>
      <v-btn icon :ripple="false">
        <!-- <v-icon v-show="showEditIcon">mdi-pencil-outline</v-icon> -->
      </v-btn>
    </v-card-title>
    <v-card-text>This is a test</v-card-text>
  </v-card>
</template>

<script>
import db from '@/firebase/firebase';
export default {
  name: 'NoteItem',
  data: () => ({
    notes: []
  }),
  created() {
    this.getNotes();
  },
  methods: {
    async getNotes() {
      const notes = db.collection('notes');
      const snapshot = await notes.get();
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    }
  }
};
</script>
