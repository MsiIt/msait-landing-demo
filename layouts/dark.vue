<template>
  <div class="layout">
    <Header mode="dark" />

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
  display: flex;
  flex-direction: column;
}
</style>
