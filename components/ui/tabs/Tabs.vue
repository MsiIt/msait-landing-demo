<template>
  <div class="tabs-container">
    <ul class="tabs">
      <li
        v-for="option in options"
        :key="option.id"
        @click="handleChange(option)"
        :class="{ active: option.id === model }"
      >
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const model = defineModel()

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
})

const handleChange = (option) => {
  model.value = option.id
}
</script>

<style scoped lang="scss">
.tabs-container {
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 -10px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.tabs {
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.tabs li {
  @include p-text;
  padding: 4px 16px;
  border: none;
  border-radius: 20px;
  background-color: $color-light-100;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.tabs li:hover {
  background-color: #e0e0e0;
}

.tabs li.active {
  background-color: $color-main-200;
  color: $color-light-100;
}
</style>
