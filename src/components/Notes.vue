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
      <v-card outlined hover class="flex d-flex flex-column">
        <v-card-title>
          {{ noteItem.title }}
          <v-spacer></v-spacer>
          <v-btn icon :ripple="false">
            <!-- <v-icon v-show="showEditIcon">mdi-pencil-outline</v-icon> -->
          </v-btn>
        </v-card-title>
        <v-card-text>{{ noteItem.content }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Notes',
  data: () => ({
    noteItems: []
  }),
  async created() {
    await this.$store.dispatch('fetchNotes');
    this.noteItems = this.$store.getters.getAllNotes;
  },
  methods: {}
};
</script>
