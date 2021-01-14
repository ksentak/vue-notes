<template>
  <v-menu open-on-hover :close-on-content-click="false" top offset-y v-model="open">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-palette-outline</v-icon>
      </v-btn>
    </template>
    <v-card max-width="160" tile>
      <v-card-text class="pa-2 d-flex flex-wrap">
        <v-tooltip color="grey darken-3" bottom v-for="(value, name) in colors" :key="name">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :color="`${name !== 'Default' ? value : ''}`"
              @click="colorSelected(value)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                {{ name !== 'Default' ? selectedIcon(value, false) : selectedIcon(value, true) }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ name }}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    selected: String
  },
  data: () => ({
    open: false,
    colors: {
      Default: 'none',
      Red: 'red accent-1',
      Orange: 'orange accent-2',
      Yellow: 'yellow accent-1',
      Green: 'light-green accent-1',
      Blue: 'cyan lighten-4',
      Purple: 'purple lighten-4',
      Pink: 'pink lighten-4'
    }
  }),
  methods: {
    selectedIcon(color, blank) {
      const defaultIcon = blank ? 'mdi-checkbox-blank-circle-outline' : 'mdi-checkbox-blank-circle';
      const checkedIcon = blank ? 'mdi-check-circle-outline' : 'mdi-checkbox-marked-circle';
      return this.selected === color ? checkedIcon : defaultIcon;
    },
    colorSelected(color) {
      this.$emit('color-selected', color);
    }
  },
  watch: {
    open(newVal) {
      this.$store.commit('setColorMenuOpen', newVal);
    }
  }
};
</script>
