<script lang="ts" setup>
import _ from 'lodash'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  mode: {
    type: String,
    default: '',
  },
})

const getIsLast = (item) => {
  return _.last(props.list) === item
}

const getComponent = (item) => {
  return item.path ? resolveComponent('nuxt-link') : 'span'
}
</script>

<template>
  <div class="breadcrumbs">
    <span
      :class="{ 'blue-text': mode === 'blue' }"
      class="text"
      :style="{ whiteSpace: mode === 'blue' ? 'nowrap' : 'wrap' }"
    >
      <template v-for="(item, i) in list" :key="i">
        <component
          :is="getComponent(item)"
          :to="item.path"
          :class="['item', { link: !!item.path }]"
          >{{ item.value }}</component
        >
        <span v-if="!getIsLast(item)"> / </span>
      </template>
    </span>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  @include p-body-s;
  overflow: hidden;
  display: flex;
}

.text {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.item {
  color: $color-light-100;
  @include transition;
  transition-property: color;

  &.link:hover {
    color: darken($color-light-100, 20%);
  }
}
.blue-text .item {
  color: $color-main-200;

  &.link:hover {
    color: darken($color-main-200, 20%);
  }
}

.blue-text {
  color: $color-main-200;
}
</style>
