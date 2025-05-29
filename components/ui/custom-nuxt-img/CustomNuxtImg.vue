<template>
  <div class="nuxt-img-wrapper">
    <NuxtImg
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
      :class="imgClass"
      class="image"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomNuxtImg',
  props: {
    src: { type: String, required: true },
    width: { type: [String, Number], required: true },
    height: { type: [String, Number], required: true },
    alt: { type: String, default: '' },
    imgClass: { type: String, default: '' },
  },
}
</script>

<style scoped>
.nuxt-img-wrapper {
  line-height: 0;
}
</style>
