<template>
  <v-card
    outlined
    hover
    class="flex d-flex flex-column"
    @mouseenter="toggleEditIcon()"
    @mouseleave="toggleEditIcon()"
    @click="viewNote()"
  >
    <v-card-title>
      {{ this.title }}
      <v-spacer></v-spacer>
      <v-btn icon :ripple="false">
        <v-icon v-show="showEditIcon">mdi-pencil-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>{{ this.content }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Note',
  props: {
    id: String,
    title: String,
    content: String,
    color: String
  },
  data: () => ({
    // noteItems: [],
    showEditIcon: false
  }),
  // async created() {
  //   await this.$store.dispatch('fetchNotes');
  //   this.noteItems = this.$store.getters.getAllNotes;
  // },
  methods: {
    toggleEditIcon() {
      this.showEditIcon = !this.showEditIcon;
    },
    viewNote() {
      console.log('clicked', this.id);
    }
  }
};
</script>
