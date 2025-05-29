<template>
  <div @click="toggleMenu" class="burger-menu">
    <div v-if="isOpen" class="icon close-icon">
      <SvgIcon name="close" width="21" height="21" :class="{ dark: darkMode }" />
    </div>
    <div v-else class="icon open-icon">
      <SvgIcon name="burger" width="21" height="21" :class="{ dark: darkMode }" />
    </div>
  </div>

  <client-only>
    <Teleport to=".teleport-host">
      <v-navigation-drawer v-model="isOpen" temporary location="top">
        <div class="links-container">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            :class="['link', { dark: darkMode }]"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </v-navigation-drawer>
    </Teleport>
  </client-only>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'light',
  },
})
const { mode } = props
const darkMode = mode === 'dark'

const { t } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
  { name: t('header.links.main'), path: localePath('/') },
  { name: t('header.links.services'), path: localePath('services') },
  { name: t('header.links.cases'), path: localePath('cases') },
  { name: t('header.links.contacts'), path: localePath('contacts') },
])

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.burger-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
}

.icon {
  color: $color-light-100;
  line-height: 0;
}
.dark {
  color: $color-dark-200;
}

.links-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
}

.link {
  @include p-text;
  color: $color-dark-100;
  pointer-events: auto;

  /* transition */
  @include transition;
  transition-property: color;
}
</style>
