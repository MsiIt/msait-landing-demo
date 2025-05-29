<template>
  <header class="header">
    <div class="container">
      <div class="wrapper" :class="{ 'dark-mode': darkMode }">
        <NuxtLink class="logo-link" :to="localePath('/')">
          <CustomNuxtImg :src="`/images/logo-${mode}.png`" width="110" height="40" alt="Logo" />
        </NuxtLink>

        <nav class="nav hidden--sm">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            :class="['link', { dark: darkMode }]"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!--        <LanguageSelector class="hidden&#45;&#45;sm" :mode="mode" />-->

        <div class="header-block">
          <NuxtLink :to="localePath('/brief')">
            <PrimaryButton class="propose-button">{{
              t('header.button.propose-project')
            }}</PrimaryButton>
          </NuxtLink>

          <div class="drawer">
            <NavDrawer :mode="mode" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  mode: {
    type: String,
    default: 'light',
  },
})
const { mode } = props

const { t } = useI18n()
const localePath = useLocalePath()

const darkMode = mode === 'dark'

const links = computed(() => [
  { name: t('header.links.services'), path: localePath('services') },
  { name: t('header.links.cases'), path: localePath('cases') },
  { name: t('header.links.contacts'), path: localePath('contacts') },
])
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 1003;
  left: 0;
  right: 0;
  pointer-events: none;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  margin: 60px 0;

  @include sm {
    margin: 43px 0;
    gap: 0;
  }

  &.dark-mode {
    @include sm {
      margin: 30px 0;
    }
  }
}

.logo-link {
  pointer-events: auto;
}

.nav {
  margin-left: auto;
  display: flex;
  gap: 36px;
}

.link {
  @include p-text;
  color: $color-light-100;
  pointer-events: auto;

  /* transition */
  @include transition;
  transition-property: color;

  &:hover {
    color: $color-main-200;
  }
}

.link.dark {
  color: $color-dark-200;

  &:hover {
    color: $color-main-100;
  }
}

.propose-button {
  @include p-text-s;
  padding: 10px 15px;
  border-radius: 15px;
  pointer-events: auto;

  &:hover {
    background-color: $color-main-100;
    color: $color-light-100;
  }
}

.header-block {
  display: flex;
  gap: 24px;
  align-items: center;
}

.drawer {
  pointer-events: auto;
  display: none;

  @include sm {
    display: block;
  }
}
</style>
