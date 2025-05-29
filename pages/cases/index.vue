<script setup lang="ts">
definePageMeta({
  layout: 'dark',
})
</script>

<template>
  <main>
    <CasesHomeSection />
    <ExamplesSection />
    <div class="offer-section">
      <OfferSection />
    </div>
  </main>
</template>

<style scoped lang="scss">
.offer-section {
  margin: 120px 0 60px;

  @include md {
    margin: 90px 0 60px;
  }

  @include sm {
    margin: 30px 0 32px;
  }
}
</style>
