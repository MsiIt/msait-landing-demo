<script setup lang="ts">
import Dark from '~/layouts/dark.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
console.log({ width })
</script>

<template>
  <Dark>
    <div class="page">
      <div class="content-container">
        <NuxtImg src="/images/404-bg.jpg" width="1440" height="506" class="bg" />

        <div class="content">
          <p class="error-text">{{ $t('page.error.text') }}</p>
          <div class="error-status">
            <p class="status-count left main-gradient-text">4</p>

            <template v-if="width < 479">
              <CustomNuxtImg src="/images/kryptonite.png" width="130" height="181" />
            </template>
            <template v-else>
              <CustomNuxtImg src="/images/kryptonite.png" width="162" height="227" />
            </template>

            <p class="status-count right main-gradient-text">4</p>
          </div>
        </div>
      </div>
    </div>
  </Dark>
</template>

<style scoped lang="scss">
.page {
  padding-top: 160px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-container {
  flex: 1;
  position: relative;
  padding-top: 115px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg {
  position: absolute;
  bottom: 0;
  z-index: 1;
  /* @include absolute-stretch; */
  object-fit: contain;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 2;
}

.error-text {
  @include p-large-text;
  color: $color-dark-100;
  text-align: center;
  @include xs {
    @include p-text;
  }
}

.error-status {
  margin-top: 24px;
  display: flex;
}

.left {
  margin-right: -8px;
}

.right {
  margin-left: -8px;
}

.status-count {
  font-size: 200px;
  line-height: 200px;
  font-weight: 700;

  @include xs {
    font-size: 150px;
  }
}
</style>
