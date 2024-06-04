<template>
  <v-app>
    <home-system-bar />

    <home-app-bar />

    <home-view />

    <home-footer />

    <home-settings></home-settings>

    <home-drawer></home-drawer>
  </v-app>
</template>

<script>
import HomeSystemBar from "../layouts/SystemBar.vue";
import HomeAppBar from "../layouts/AppBar.vue";
import HomeView from "../layouts/View.vue";
import HomeFooter from "../layouts/Footer.vue";
import HomeSettings from "../layouts/Settings.vue";
import HomeDrawer from "../layouts/Drawer.vue";

export default {
  name: "HomeLayout",
  components: {
    HomeSystemBar,
    HomeAppBar,
    HomeView,
    HomeFooter,
    HomeSettings,
    HomeDrawer
  }
};
</script>
