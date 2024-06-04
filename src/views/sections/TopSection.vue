<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="image"
      class="white--text"
      :gradient="gradient"
      aspect-ratio="16/9"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <!-- <base-subheading
            weight="regular"
            title="WE LOVE MAKING THINGS SIMPLE AND AMAZING"
          /> -->

          <base-heading
            size="text-h2"
            :title="title"
            weight="medium"
          />

          <base-body text-color="white--text">{{ description }}</base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <base-btn @click="() => getMore()">
              {{$t('top-section.get-more')}}
            </base-btn>

            <!-- <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn :ripple="false" class="pa-1" height="auto" text>
              Get Started Now
            </base-btn> -->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
import { HexToRGBA, RGBAtoCSS } from "vuetify/lib/util/colorUtils";

export default {
  props: {
    title: {
      type: String,
      default: "Site name",
    },
    description: {
      type: String,
      default: "Description"
    },
    image: {
      type: [String, Object],
      default: "none"
    },
  },
  provide: {
    theme: { isDark: true }
  },

  computed: {
    gradient() {
      const color = `${this.$vuetify.theme.currentTheme.gradient}44`;
      const overlay = RGBAtoCSS(HexToRGBA(color));
      
      return `to bottom, ${overlay}, rgba(0,0,0,0) 100%`;
    },
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    }
  },

  methods: {
    getMore(){
      window.location.href = "https://www.acerho.com";
    }
  }
};
</script>
