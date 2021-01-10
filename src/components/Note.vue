<template>
  <v-card
    outlined
    hover
    class="flex d-flex flex-column"
    @mouseenter="toggleEditIcon()"
    @mouseleave="toggleEditIcon()"
    @click="openNoteModal()"
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
    dialog: false,
    showEditIcon: false
  }),
  methods: {
    toggleEditIcon() {
      this.showEditIcon = !this.showEditIcon;
    },
    openNoteModal() {
      console.log('clicked', this.id);
      this.$store.commit('setShowNoteDialog', true);
    }
  }
};
</script>
