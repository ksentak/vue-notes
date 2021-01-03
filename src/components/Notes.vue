<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="d-flex flex-column">
      <NoteItem />
    </v-col>
  </v-row>
</template>

<script>
import NoteItem from './NoteItem';
export default {
  name: 'Notes',
  components: {
    NoteItem
  }
};
</script>
