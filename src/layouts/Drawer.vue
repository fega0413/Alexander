<template>
  <v-theme-provider>
    <v-navigation-drawer dark app temporary right v-model="$store.state.drawer">
      <v-app-bar flat height="80">
        <v-btn icon @click="() => $store.state.drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/" link>
          <v-list-item-content>
            <v-list-item-title>{{ $t('appBar.home') }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item to="/contact-us" link>
          <v-list-item-content>
            <v-list-item-title>{{ $t('appBar.contact') }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
        
        <v-list-item to="/partners" link>
          <v-list-item-content>
            <v-list-item-title>{{ $t('appBar.partners') }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-subheader>{{ $t('appBar.solutions.title') }}</v-subheader>

        <v-list-item v-for="(i, index) in $t('appBar.solutions.items')" :key="index" :to="i.href" link>
          <v-list-item-content>
            <v-list-item-title>{{ i.name }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-theme-provider>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  methods: {

  }
};
</script>