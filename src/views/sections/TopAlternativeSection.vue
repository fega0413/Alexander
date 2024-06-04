<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 450 : 300"
        :gradient="gradient"
        :src="image"
        color="#45516b"
        flat
        max-width="100%"
        tile
      >
        <v-row
          v-if="title"
          align="center"
          class="ma-0 fill-height text-center"
          justify="center"
        >
          <v-col cols="12">
            <base-heading :title="title" space="2" weight="500" />

            <base-body style="max-width: 650px; margin: auto">{{ content }}</base-body>
      
            <base-divider color="primary" dense />
          </v-col>
        </v-row>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
// Components
import { HexToRGBA, RGBAtoCSS } from "vuetify/lib/util/colorUtils";

export default {
  props: {
    image: {
      type: [String, Object],
      default: "none"
    },
    title: {
      type: String,
      default: "Titulo"
    },
    content: {
      type: String,
    }
  },
  provide: {
    heading: { align: "center" }
  },
  computed: {
    gradient() {
      const color = `${this.$vuetify.theme.currentTheme.primary}45`;
      const overlay = RGBAtoCSS(HexToRGBA(color));
      
      return `to bottom, ${overlay}, rgba(0,0,0,.4)`;
    }
  }
};
</script>
