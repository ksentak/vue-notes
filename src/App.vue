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
        <!-- <v-snackbar
          v-model="this.$store.state.snackbar.open"
          :color="this.$store.state.snackbar.color"
          >{{ this.$store.state.snackbar.text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="resetSnackbar()">
              Close
            </v-btn>
          </template>
        </v-snackbar> -->
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
  data: () => ({
    // snackbar: {
    //   open: false,
    //   color: '',
    //   text:''
    // }
  }),
  methods: {
    // resetSnackbar() {
    //   const snackbar = {
    //     open: false,
    //     text: ''
    //   };
    //   this.$store.commit('showSnackbar', snackbar);
    // }
  }
};
</script>
