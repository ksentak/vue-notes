<template>
  <v-app>
    <v-app-bar app color="blue-grey lighten-2" dark>
      <div class="d-flex align-center">
        <h2>Vue Notes</h2>
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="mt-3">
        <CreateNote />
        <Notes />
        <v-snackbar v-model="snackbar.open" :color="snackbar.color"
          >{{ snackbar.text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="closeSnackbar()">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <NoteDialog />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CreateNote from '@/components/CreateNote';
import Notes from '@/components/Notes';
import NoteDialog from '@/components/NoteDialog';

export default {
  name: 'App',
  components: {
    CreateNote,
    Notes,
    NoteDialog
  },
  computed: {
    snackbar() {
      return this.$store.getters.getSnackbar;
    }
  },
  methods: {
    closeSnackbar() {
      const snackbar = {
        open: false,
        text: ''
      };
      this.$store.commit('showSnackbar', snackbar);
    }
  }
};
</script>
