<template>
  <v-app>
    <v-app-bar app color="amber" dark>
      <div class="d-flex align-center">
        <h2>Vue Notes</h2>
      </div>

      <v-spacer></v-spacer>

      <!-- CAN ADD V-BTN HERE -->
    </v-app-bar>

    <v-main>
      <v-container class="mt-3">
        <CreateNote />
        <Notes />
        <!-- <v-snackbar v-model="snackbar.open" :color="snackbar.color">{{ snackbar.text }}</v-snackbar> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CreateNote from '@/components/CreateNote';
import Notes from '@/components/Notes';

export default {
  name: 'App',

  components: {
    CreateNote,
    Notes
  },

  data: () => ({})
};
</script>
