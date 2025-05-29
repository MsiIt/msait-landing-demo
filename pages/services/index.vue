<script setup lang="ts">
definePageMeta({
  layout: 'dark',
})
</script>

<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <PrinciplesSection />
    <a id="technologies" class="anchor"></a>
    <TechnologiesSection />
    <div>
      <OfferSection class="offer-section" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.offer-section {
  padding-bottom: 60px;

  @include sm {
    padding-bottom: 32px;
  }
}
</style>
