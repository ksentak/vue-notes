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
export default {
  name: 'NoteItem'
};
</script>
