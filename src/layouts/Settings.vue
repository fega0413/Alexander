<template>
  <v-fab-transition>
    <v-btn
      dark
      fixed
      bottom
      right
      fab
      @click="() => ($vuetify.theme.dark = !$vuetify.theme.dark)"
    >
      <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {};
</script>
