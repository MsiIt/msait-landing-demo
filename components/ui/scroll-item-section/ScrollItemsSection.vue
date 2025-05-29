<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  items: Array,
})

const router = useRouter()

function navigateToCases() {
  router.push('/cases')
}
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <div class="wrapper">
        <div class="header">
          <p class="title main-gradient-text">{{ title }}</p>
          <Button @click="navigateToCases" variant="text" icon class="hidden--md">{{
            $t('projects-list-section.button.more')
          }}</Button>
        </div>

        <HorizontalSwiper
          :list="items"
          :swiperOptions="{ spaceBetween: 32, freeMode: false, initialSlide: 1 }"
        >
          <template #default="{ item }">
            <ProjectItem class="project-item" :item="item" />
          </template>
        </HorizontalSwiper>

        <div class="scroll-aside">
          <ScrollAside />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects-section {
  background-color: $color-light-400;
  padding: 120px 0;
  overflow: hidden;

  @include md {
    padding: 90px 0;
  }

  @include sm {
    padding: 60px 0;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  @include h2-title;
}

.project-item {
  width: 338px !important;
  @include xs {
    width: 295px !important;
  }
}
</style>
