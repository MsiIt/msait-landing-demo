<template>
  <section class="slider-section">
    <div class="container">
      <p class="list-title">{{ title }}</p>
      <div class="feature-section">
        <div class="feature-list">
          <div
            v-for="slide in slides"
            :key="slide.id"
            :class="['feature-item', { active: slide.id === activeItem.id }]"
            @click="setActiveItem(slide)"
          >
            <SvgIcon
              name="angle-right"
              width="39"
              height="38"
              :color="slide.id === activeItem.id ? '#ACCAFF' : '#EAEAF0'"
            />
            <p class="list-text">{{ slide.properties.title.value }}</p>
          </div>
        </div>

        <div class="feature-content">
          <NuxtImg
            :src="activeItem.properties.image.value[0].url"
            alt="slide-image"
            class="image illustration-img"
          />
          <p class="image-text">{{ activeItem.properties.point.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ContentEntityName } from '~/constants/index'
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const setActiveItem = (item) => {
  activeItem.value = item
}

const { item } = props

const title = item.properties.title.value

const slides = item.relations.find(
  (el) => el.symbolCode === ContentEntityName.ProjectComponentSliderSlide
)?.entities

const activeItem = ref(slides[0])
</script>

<style lang="scss" scoped>
.feature-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  @include p-body;

  @include sm {
    flex-direction: column;
    align-items: unset;
  }
}

.feature-list {
  display: flex;
  flex-direction: column;
  height: min-content;
}

.list-title {
  @include p-body;
  margin-bottom: 51px;

  @include sm {
    margin-bottom: 24px;
  }
}

.feature-item {
  cursor: pointer;
  margin-bottom: 24px;
  display: flex;
  color: #666;
  transition: color 0.3s ease;

  &.active {
    color: $color-dark-200;
  }

  .icon {
    margin-right: 24px;
  }

  @include sm {
    margin-bottom: 16px;
  }
}

.list-text {
  flex: 1;
  max-width: 513px;
}

.feature-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
}

.illustration-img {
  border-radius: 12px;
  box-shadow: 0 30px 40px 0 #1a237e0d;
  width: 545px;
  height: auto;

  @include md {
    width: calc(100vw - 60px - 508px - 32px);
    height: auto;
  }

  @include sm {
    width: calc(100vw - 20px);
    height: auto;
  }
}

.image-text {
  text-align: center;
  margin-top: 16px;
  @include p-text-s;
}
</style>
