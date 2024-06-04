<template>
  <section>
    <top-alternative-section :image="OmnicanalImage" :title="$t('iso-27001.topAlternative.title')"
      :content="$t('iso-27001.topAlternative.content')"></top-alternative-section>

    <features-section :title="$t('iso-27001.features.title')" :description="$t('iso-27001.features.description')" 
      :items="$t('iso-27001.features.items')" ></features-section>

    <contact-section></contact-section>
  </section>
</template>

<script>
import TopAlternativeSection from "../sections/TopAlternativeSection.vue";
import OmnicanalImage from "../../assets/iso.png";
import FeaturesSection from "../sections/FeaturesSection.vue";
import ContactSection from "../sections/ContactSection.vue";

export default {
  components: {
    TopAlternativeSection,
    FeaturesSection,
    ContactSection
  },
  data() {
    return {
      OmnicanalImage: OmnicanalImage,
    };
  }
};
</script>
