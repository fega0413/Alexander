<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card :title="title"  space="6">{{ content }}</base-info-card>

      <base-business-contact dense :business="business" />
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "BaseBusinessInfo",

  props: {
    title: {
      type: String,
      default: "Title"
    },
    content: {
      type: String,
      default: "Description"
    },
    business: {
      type: Array,
      default: () => ([])
    },
    dark: Boolean
  },
};
</script>
