<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field label="Name" />

    <base-text-field label="Email" />

    <base-text-field label="Subject" />

    <base-textarea
      class="mb-6"
      label="Your Need & Description"
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      :href="href"
      outlined
      target="_blank"
    >
      {{$t('base-contact-form.btn')}}
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
      href: {
        type: String,
      }
    },
  }
</script>
