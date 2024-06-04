<template>
  <section>
    <top-section :image="Image" :title="$t('home.top.title')" :description="$t('home.top.description')"></top-section>

    <description-section :title="$t('home.description.title')" :content="$t('home.description.content')"></description-section>

    <features-section :title="$t('home.features.title')" :description="$t('home.features.description')" :items="$t('home.features.items')">
    </features-section>

    <!-- <description-section :title="$t('home.description2.title')" :content="$t('home.description2.content')"></description-section> -->

    <offers-section :items="$t('home.offers.items')"></offers-section>

    <contact-section></contact-section>
  </section>
</template>

<script>
import TopSection from "../sections/TopSection.vue";
import DescriptionSection from "../sections/DescriptionSection.vue";
import OffersSection from "../sections/OffersSection.vue";
import FeaturesSection from "../sections/FeaturesSection.vue";
import ContactSection from "../sections/ContactSection.vue";
// import OffersSectionWithDescription from "../sections/OffersSectionWithDescription.vue";
// import Image from "../../assets/HUBITER logistics/logistica.jpg"
import Image from "../../assets/main.png"

export default {
  name: "Home",
  components: {
    TopSection,
    DescriptionSection,
    // OffersSectionWithDescription,
    OffersSection,
    FeaturesSection,
    ContactSection
  },
  data() {
    return {
      Image: Image,
    };
  }
};
</script>
