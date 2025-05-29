<template>
  <button :class="variant" @click="callback($event)">
    <slot></slot>
    <SvgIcon v-if="icon" name="arrow-right" class="icon" />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    variant: {
      type: String as PropType<'filled' | 'secondary' | 'text'>,
      default: 'filled',
    },
    icon: Boolean,
  },
  methods: {
    callback(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @include p-text;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 16px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}

.filled {
  background-color: $color-main-200;
  color: $color-light-100;
}

.secondary {
  background-color: $color-light-200;
  color: $color-main-300;
}

.text {
  padding: 0;
}
</style>
