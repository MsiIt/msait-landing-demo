<template>
  <section class="video-section">
    <div class="video-container">
      <NuxtImg :src="bgImage" class="bg" />
      <div class="gradient-container" />
      <div class="video-content">
        <p class="video-title">{{ title }}</p>
        <iframe
          :src="videoId ? videoUrl : fullUrl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  item: Object,
})

const { item } = props

const bgImage = item.properties.backgroundImage.value[0].url
const title = item.properties.title.value

const fullUrl = item.properties.url.value
const videoId = fullUrl?.split('v=')[1]?.split('&')[0]
const videoUrl = `https://www.youtube.com/embed/${videoId}`
</script>

<style lang="scss" scoped>
.video-container {
  margin: 64px 0 84px;
  padding: 64px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @include md {
    margin: 49px 0 120px;
  }
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.gradient-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
}

.video-content {
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 30px;

  @include sm {
    padding: 0;
  }
}

.video {
  border-radius: 20px;
  border: none;
  max-width: 900px;
  width: 100%;
  height: 431px;

  @include sm {
    border-radius: 0;
  }
}

.video-title {
  @include p-text;
  color: $color-light-100;
  text-align: center;

  @include sm {
    padding: 0 30px;
  }
}
</style>
