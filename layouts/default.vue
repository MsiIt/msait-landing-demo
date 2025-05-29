<template>
  <div class="layout">
    <Header mode="light" />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
