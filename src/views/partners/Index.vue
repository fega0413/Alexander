<template>
  <section>
    <top-alternative-section :image="PartnersImage" :title="$t('partners.topAlternative.title')"
      :content="$t('partners.topAlternative.content')"></top-alternative-section>

    <partners-section></partners-section>

    <contact-section></contact-section>
  </section>
</template>

<script>
import TopAlternativeSection from "../sections/TopAlternativeSection.vue";
import ContactSection from "../sections/ContactSection.vue";
import PartnersImage from "../../assets/meeting.png"
import PartnersSection from "../sections/PartnersSection.vue";

export default {
  components: {
    TopAlternativeSection,
    PartnersSection,
    ContactSection
  },
  data() {
    return {
      PartnersImage: PartnersImage
    };
  }
};
</script>
