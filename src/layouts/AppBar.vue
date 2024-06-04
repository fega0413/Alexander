<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
      class="layout-appbar__appbar"
      :dark="isDark()"
    >
      <base-img
        src="logo.png"
        class="mr-3 hidden-xs-only"
        contain
        max-width="150"
        width="100%"
      />

      <v-toolbar-title class="hidden-lg-only">{{ $t('appBar.title') }}</v-toolbar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/">{{ $t('appBar.home') }}</v-btn>

        <v-menu open-on-hover rounded="0" bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
            >
              {{ $t('appBar.solutions.title') }}
            </v-btn>
          </template>

          <v-list :dark="isDark()">
            <v-list-item
              v-for="(item, index) in $t('appBar.solutions.items')"
              :key="index"
              :to="item.href"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase">{{ item.name }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                  <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text to="/partners">{{ $t('appBar.partners') }}</v-btn>
        
        <v-btn text to="/contact-us">{{ $t('appBar.contact') }}</v-btn>

        <v-btn
          text
          @click="() => {
            if($i18n.locale == 'en'){
              $i18n.locale = 'es';
            }else{
              $i18n.locale = 'en';
            }
          }"
        >
          {{ $i18n.locale }}
        </v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="$store.commit('switchDrawer')" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
   drawer: false,
  }),
  methods: {
    isDark() {
      const color =  this.$vuetify.theme.currentTheme["layout-appbar__appbar"] || this.$vuetify.theme.currentTheme.primary;
      return this.getColorLuminance(color);
    },
    getColorLuminance(color) {
      // Convierte el color a formato RGB
      if (color.charAt(0) === '#') {
        color = color.substr(1);
      }
      if (color.length === 3) {
        color = color.replace(/(.)/g, '$1$1');
      }
      
      // Obtiene los valores RGB
      var r = parseInt(color.substr(0, 2), 16);
      var g = parseInt(color.substr(2, 2), 16);
      var b = parseInt(color.substr(4, 2), 16);
      
      // Calcula la luminosidad
      var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      return luminance>.5?false:true;
      
    }
  }
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
