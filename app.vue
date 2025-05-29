<template>
  <v-app>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <div class="teleport-host"></div>
  </v-app>
</template>

<script setup>
useHead({
  script: [
  ],
  noscript: [
  ],
})
</script>
