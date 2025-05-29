<script setup>
const partners = [
  {
    name: 'levelkitchen',
    src: '/images/levelkitchen-logo.png',
    width: 90,
    height: 49,
  },
  {
    name: 'myfood',
    src: '/images/myfood-logo.png',
    width: 59,
    height: 55,
  },
  {
    name: 'perfomance-food',
    src: '/images/perfomance-food-logo.png',
    width: 174,
    height: 47,
  },
  {
    name: 'meo',
    src: '/images/meo-logo.png',
    width: 75,
    height: 75,
  },
  {
    name: 'hatimaki',
    src: '/images/hatimaki-logo.png',
    width: 108,
    height: 54,
  },
  {
    name: 'elon-task',
    src: '/images/elon-task.png',
    width: 145,
    height: 36,
  },
  {
    name: 'cf',
    src: '/images/cf.png',
    width: 130,
  },
  {
    name: 'talant',
    src: '/images/talant.png',
    width: 70,
  },
  {
    name: 'fit-assist',
    src: '/images/fit-assist.png',
    width: 180,
    height: 34,
  },
  {
    name: 'like-buffet',
    src: '/images/like-buffet.png',
    width: 100,
    height: 90,
  },
]
</script>

<template>
  <section class="partners-section">
    <div>
      <div class="wrapper">
        <div class="partners-info">
          <p class="title main-gradient-text">{{ $t('main.trusting-companies-section.title') }}</p>
          <p class="text">{{ $t('main.trusting-companies-section.description') }}</p>
        </div>

        <HorizontalSwiper
          class="swiper"
          :list="partners"
          :swiperOptions="{
            pagination: true,
            spaceBetween: undefined,
            centeredSlides: true,
            freeMode: false,
            initialSlide: 0,
            loop: true,
            autoplay: {
              delay: 5000,
            },
          }"
        >
          <template #default="{ item }">
            <CustomNuxtImg
              :key="item.src"
              :src="item.src"
              :alt="item.name"
              :width="item.width"
              :height="item.height"
            />
          </template>
        </HorizontalSwiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.partners-section {
  background-color: $color-light-300;
  margin: 120px 0;
  overflow: hidden;

  @include md {
    margin: 120px 0 107px;
  }

  @include sm {
    margin: 90px 0 78px;
  }
}

.partners-info {
  max-width: 558px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.title {
  @include h2-title;
  margin-bottom: 24px;
}
.text {
  @include p-large-body;
  line-height: 140%;
  color: $color-dark-200;
}

:deep(.swiper) {
  margin-top: 64px;

  .swiper-slide {
    padding: 0 55px;

    @include md {
      padding: 0 50px;
    }

    @include sm {
      padding: 0 23px;
    }
  }

  .swiper-pagination {
    position: relative;
    margin-top: 64px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: $color-light-400;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: $color-main-100;
  }
}
</style>
