<template>
  <v-footer id="home-footer" color="secondary" dark min-height="72">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div
            class="d-flex flex-wrap justify-md-start justify-center justify-md-none"
          >
            <privacy-policy></privacy-policy>

            <v-responsive
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            >
              <v-divider vertical />
            </v-responsive>
            
            <terms-and-conditions></terms-and-conditions>

            <v-responsive
              class="mx-4 shrink hidden-sm-and-down"
              max-height="24"
            >
              <v-divider vertical />
            </v-responsive>
            
            <template v-for="(s, i) in social">
              <a
                :key="`a-${i}`"
                class="white--text pa-1 pa-md-0"
                :href="s.href"
                v-text="s.name"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`d-${i}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col class="text-center text-md-right" cols="12" md="6">
          Copyright &copy; 2024 ACERHO
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import PrivacyPolicy from './PrivacyPolicy.vue';
import TermsAndConditions from './TermsAndConditions.vue';

export default {
  name: "HomeFooter",
  components: {
    PrivacyPolicy,
    TermsAndConditions
  },
  data: () => ({
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com"
      },
      {
        name: "Twitter",
        href: "https://twitter.com"
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com"
      }
    ]
  })
};
</script>

<style lang="sass">
#home-footer a
  text-decoration: none
</style>
