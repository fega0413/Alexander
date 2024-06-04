<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      :src="src"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
  export default {
    provide: {
      heading: { align: 'center' },
    },
    props: {
      src: {
        type: String
      }
    },
  }
</script>
