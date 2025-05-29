<template>
  <client-only>
    <swiper
      slidesPerView="auto"
      class="swiper"
      :freeMode="true"
      :mousewheel="{ forceToAxis: true }"
      :modules="modules"
      spaceBetween="24"
      v-bind="{ ...swiperOptions }"
    >
      <swiper-slide
        v-for="(item, index) in list"
        :class="slideClass"
        class="swiper-slide"
        :key="index"
      >
        <slot :item="item" :index="index">
          {{ item }}
        </slot>
      </swiper-slide>
    </swiper>
  </client-only>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode, Mousewheel, Pagination } from 'swiper/modules'

const props = defineProps({
  list: { type: Array, required: true },
  swiperOptions: { type: Object, default: () => ({}) },
  slideClass: { type: String, default: '' },
})

const modules = [FreeMode, Mousewheel, Pagination, Autoplay]

const { list, swiperOptions, slideClass } = props
</script>

<style lang="scss">
.swiper {
  overflow: unset;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: unset;
  align-self: center;
}
</style>
