<template>
  <section class="text-section">
    <div class="container">
      <div class="two-columns-text">
        <p v-for="(block, i) in blocks" :key="i" class="pre-line">{{ block }}{{ '\n\n' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { item } = defineProps({
  item: Object,
})

const blocks = item.properties.text.value.split('¶')
</script>

<style lang="scss" scoped>
.text-section {
  margin: 120px 0;

  @include sm {
    margin: 90px 0;
  }
}

.two-columns-text {
  column-count: 2;
  column-gap: 40px;
  line-height: 1.6;

  @include sm {
    column-count: 1;
  }
}

.two-columns-text p {
  @include p-body;
  text-align: left;
  text-indent: 16px;
}
</style>
