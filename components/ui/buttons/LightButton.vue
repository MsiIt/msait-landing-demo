<script setup lang="ts"></script>

<template>
  <v-btn :ripple="false">
    <slot />
  </v-btn>
</template>

<style lang="scss" scoped>
button {
  box-shadow: none;
  text-transform: none;
  letter-spacing: unset;
  border-radius: 12px;
  background-color: $color-light-200;
  color: $color-main-300;
  /* height: p2r(54); */
  padding: p2r(16);
  height: auto;
  font-size: p2r(16);
  line-height: p2r(22);
  font-weight: 600;
  transition-property: box-shadow, transform, opacity, background, color;

  &:hover {
    color: $color-main-400;
  }

  &:deep(.v-btn__overlay) {
    display: none;
  }
}
</style>
