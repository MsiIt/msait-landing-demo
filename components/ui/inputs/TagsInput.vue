<script setup lang="ts">
import _ from 'lodash'

type Item = { id: number; value: string }

const model = defineModel<Item[]>()

const { multiple } = defineProps({
  items: Array as PropType<Item[] | Item>,
  multiple: { type: Boolean, default: false },
})

const handleClick = (item) => {
  const selected = getIsSelected(item)

  if (selected) {
    if (multiple) {
      model.value = model.value?.filter((i) => i.id !== item.id)
    } else {
      model.value = null
    }
  } else {
    if (multiple) {
      model.value?.push(item)
    } else {
      model.value = item
    }
  }
}

const getIsSelected = (item) => {
  return multiple ? !!_.find(model.value, ['id', item.id]) : item.id === model.value?.id
}
</script>

<template>
  <div class="tags">
    <button
      v-for="item in items"
      :key="item.id"
      class="tag"
      :class="{ selected: getIsSelected(item) }"
      @click="handleClick(item)"
    >
      {{ item.value }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.tag {
  padding: 8px 16px;
  border-radius: 16px;
  @include m-medium;
  background: $color-light-200;
  @include transition;
  transition-property: all;

  &:hover {
    background: $color-light-300;
    color: $color-dark-300;
  }

  &.selected {
    background: $color-main-100;
    color: $color-main-400;
  }
}
</style>
