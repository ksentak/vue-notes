<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      class="d-flex flex-column"
      v-for="noteItem in noteItems"
      :key="noteItem.id"
    >
      <Note
        :id="noteItem.id"
        :title="noteItem.title"
        :content="noteItem.content"
        :color="noteItem.color"
      />
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
  data: () => ({
    noteItems: []
  }),
  async created() {
    await this.$store.dispatch('fetchNotes');
    this.noteItems = this.$store.getters.getAllNotes;
  }
};
</script>
