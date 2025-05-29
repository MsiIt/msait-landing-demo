<template>
  <component
    :is="componentName"
    filled
    class="icon"
    :style="{
      '--size': size,
      '--width': width,
      '--height': height,
      '--color': color,
    }"
  />
</template>

<script lang="ts">
export default {
  name: 'SvgIcon',
  props: {
    name: { type: String, default: null },
    size: { type: [String, Number], default: null },
    width: { type: [String, Number], default: null },
    height: { type: [String, Number], default: null },
    color: { type: String, default: 'currentColor' },
  },
  computed: {
    componentName() {
      return `svgo-${this.name}`
    },
  },
}
</script>

<style scoped lang="scss">
.icon {
  display: inline-block;
  line-height: 0;
  margin-bottom: 0;
  width: calc(#{p2r(1)} * var(--width, var(--size)));
  height: calc(#{p2r(1)} * var(--height, var(--size)));
  color: var(--color, currentColor);
}
</style>
