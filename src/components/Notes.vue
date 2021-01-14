<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      class="d-flex flex-column"
      v-for="note in notes"
      :key="note.id"
    >
      <Note :id="note.id" :title="note.title" :content="note.content" :color="note.color" />
    </v-col>
  </v-row>
</template>

<script>
import Note from './Note';

export default {
  name: 'Notes',
  components: {
    Note
  },
  computed: {
    notes() {
      return this.$store.getters.getAllNotes;
    }
  },
  async created() {
    await this.$store.dispatch('fetchNotes');
  }
};
</script>
