<template>
  <v-theme-provider :dark="dark">
    <v-container class="pa-0">
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <base-icon :color="color">
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col
          v-if="title || subtitle || text"
          :cols="callout ? 9 : 12"
        >
          <base-subtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />

          <base-title
            :title="title"
            class="text-uppercase"
            space="1"
          />

          <base-divider :color="color" />

          <v-card flat color="transparent" >
            <v-card-text
              class="body-1 my-0 py-0"
              v-if="text || $slots.default"
              :text="text"
            >
              {{ text }}
            </v-card-text>
          </v-card>
          
          <!-- <base-body
            v-if="text || $slots.default"
            :text="text"
            space="6"
          >
            <slot />
          </base-body> -->
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            class="text-h2 grey--text text--lighten-4 font-weight-bold pr-8"
            v-text="callout"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseInfoCard',

    mixins: [Heading],

    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
    },
  }
</script>
