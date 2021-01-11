<template>
  <v-card
    outlined
    :color="this.color"
    hover
    class="flex d-flex flex-column"
    @mouseenter="toggleEditIcon()"
    @mouseleave="toggleEditIcon()"
    @click="
      openNoteModal();
      setSelectedNote();
    "
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
      this.$store.commit('setShowNoteDialog', true);
    },
    setSelectedNote() {
      const selectedNote = {
        id: this.id,
        title: this.title,
        content: this.content,
        color: this.color
      };
      this.$store.commit('setSelectedNote', selectedNote);
    }
  }
};
</script>
