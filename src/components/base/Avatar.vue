<template>
  <div
    :class="classes"
    class="base-avatar d-inline-flex"
  >
    <v-avatar
      v-if="outlined"
      :size="outlineSize"
      :style="styles"
      class="base-avatar__avatar"

    >
      <base-icon
        v-if="icon"
        :dark="!dark"
        color="primary"
        :size="size / 2"
      >
        {{ icon }}
      </base-icon>
    </v-avatar>

    <v-avatar
      :size="size"
      class="base-avatar__avatar"
      v-bind="$attrs"
      v-on="$listeners"
      v-else
    >
      <base-icon
        v-if="icon"
        :size="size / 2"
      >
        {{ icon }}
      </base-icon>
    </v-avatar>
  </div>
</template>

<script>
  export default {
    name: 'BaseAvatar',

    inject: ['theme'],

    props: {
      color: String,
      dark: Boolean,
      icon: String,
      outlined: {
        type: Boolean,
        default: false,
      },
      size: {
        type: [Number, String],
        default: 56,
      },
    },

    data: () => ({
      multiply: 6,
    }),

    computed: {
      classes () {
        return [
          this.outlined && 'base-avatar--outlined',
        ]
      },
      isDark () {
        return this.theme.isDark || this.dark
      },
      outlineSize () {
        return Number(this.size) + (this.size / this.multiply)
      },
      styles () {
        const margin = this.size / (this.multiply * 2)

        return {
          // Aligns the outline content with the content
          margin: `-${margin}px 0 0 -${margin}px`,
        }
      },
    },
  }
</script>

<style lang="sass">
  .base-avatar
    border-radius: 50%
    position: relative
    overflow: visible

    &__outline
      position: absolute !important
      left: 0
      top: 0

    &.base-avatar--outlined .base-avatar__avatar
      border-width: thin
      border-style: solid

  .theme--light .base-avatar--outlined .base-avatar__avatar
    border-color: rgba(0, 0, 0, .12) !important

  .theme--dark .base-avatar--outlined .base-avatar__avatar
    border-color: rgba(255, 255, 255, .12) !important
</style>
