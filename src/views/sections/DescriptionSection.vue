<template>
  <base-section>
    <base-section-heading :title="title">{{ content }}</base-section-heading>
  </base-section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        content: {
            type: String,
            default: 'Content'
        },
    }
}
</script>
