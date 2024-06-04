<template>
  <base-section id="theme-features">
    <base-section-heading :title="title">{{ description }}</base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(i, index) in items" :key="index" cols="12" md="6">
          <base-avatar-card v-bind="i" align="left" horizontal >
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Titulo'
    },
    description: {
      type: String,
      default: 'Description'
    },
    items: {
      type: Array,
      default: () => ([])
    }
  },
};
</script>
