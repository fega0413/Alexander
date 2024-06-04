<template>
  <section>
    <top-alternative-section :image="PuntoVentaImage" :title="$t('pci-dss.topAlternative.title')"
      :content="$t('pci-dss.topAlternative.content')"></top-alternative-section>

    <features-section :title="$t('pci-dss.features.title')" :description="$t('pci-dss.features.description')" 
      :items="$t('pci-dss.features.items')" ></features-section>

    <contact-section></contact-section>
  </section>
</template>

<script>
import TopAlternativeSection from "../sections/TopAlternativeSection.vue";
import PuntoVentaImage from "../../assets/certificacion.png";
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
      PuntoVentaImage: PuntoVentaImage,
    };
  }
};
</script>
