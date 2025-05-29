<script setup lang="ts">
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()
</script>

<template>
  <main>
    <HomePageSection />
    <AboutUsSection />
    <ScrollItemsSection
      :title="$t('main.projects-list-section.title')"
      :items="mainStore.projects"
    />
    <StackSection />
    <PartnersSection />
    <div class="offer-section">
      <OfferSection />
    </div>
  </main>
</template>

<style scoped lang="scss">
.offer-section {
  margin-bottom: 120px;

  @include sm {
    margin-bottom: 90px;
  }
}
</style>
