<template>
  <v-btn
    icon
    @click="$vuetify.theme.dark = !$vuetify.theme.dark"
  >
    <v-icon v-if="$vuetify.theme.dark">
      mdi-weather-sunny
    </v-icon>
    <v-icon v-if="!$vuetify.theme.dark">
      mdi-weather-night
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ThemeModeChange'
}
</script>
