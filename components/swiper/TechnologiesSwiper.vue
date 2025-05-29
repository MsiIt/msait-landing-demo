<template>
  <client-only>
    <swiper
      :direction="swiperDirection"
      :slidesPerView="slidesPerView"
      spaceBetween="0"
      class="swiper"
      :centeredSlides="true"
      @slideChange="onSlideChange"
      :mousewheel="true"
      :scrollbar="true"
      :modules="modules"
      :initial-slide="0"
      :loop="true"
      @swiper="getRef"
    >
      <swiper-slide class="slide" v-for="(item, index) in technologies" :key="index">
        <div class="tech-content">
          <CustomNuxtImg
            :src="item.src"
            :width="item.width"
            :height="item.height"
            :alt="item.name"
          />
          <span>{{ item.name }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </client-only>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/scrollbar'
import { Scrollbar, Mousewheel } from 'swiper/modules'
import { useWindowSize } from '@vueuse/core'

const props = defineProps({
  technologies: {
    type: Array,
    required: true,
  },
  technologyChange: {
    type: Object,
  },
})
const { technologies } = props
const emit = defineEmits(['technologyChange'])

const swiperRef = ref(null)
const getRef = (ref) => {
  swiperRef.value = ref
}

const route = useRoute()
watch(
  swiperRef,
  (ref) => {
    const id = route.query?.technologyId

    if (!ref || !id) {
      return
    }

    const index = technologies.findIndex((technology) => technology.id === Number(id))
    ref.slideTo?.(index)
  },
  { immediate: true }
)

const modules = [Scrollbar, Mousewheel]

const onSlideChange = (swiper) => {
  emit('technologyChange', technologies[swiper.activeIndex])
}

const { width } = useWindowSize()

const swiperDirection = computed(() => (width.value < 910 ? 'horizontal' : 'vertical'))
const slidesPerView = computed(() => (width.value < 910 ? 'auto' : 5))
</script>

<style scoped lang="scss">
.swiper {
  width: 573px;
  height: 528px;

  @include sm {
    width: 100%;
    height: 128px;
  }
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: 0.5;
  padding: 0 33px;
}

.tech-content {
  font-size: 23px;
  font-weight: 600;
  line-height: 32px;
  display: flex;

  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
}

.swiper-slide-active {
  font-size: 23px;
  font-weight: 600;
  line-height: 32px;
  opacity: 1;
  transform: scale(1.2);
}

.slide:not(.swiper-slide-active) {
  transform: scale(0.7);
}
</style>
