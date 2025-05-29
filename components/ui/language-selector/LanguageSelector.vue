<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { vOnClickOutside } from '@vueuse/components'
import _ from 'lodash'

const props = defineProps({
  mode: {
    type: String,
    default: 'light',
  },
})
const { mode } = props
const darkMode = mode === 'dark'

const { locale, availableLocales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const dropdown = ref(false)
const buttonRef = ref(null)

const toggleDropdown = (event: Event) => {
  event.stopPropagation()
  dropdown.value = !dropdown.value
}

const onClickOutsideHandler = [
  () => {
    dropdown.value = false
  },
  { ignore: [buttonRef] },
]
</script>

<template>
  <div class="language-selector">
    <button
      :class="['language-button', { dark: darkMode }]"
      ref="buttonRef"
      @click="toggleDropdown"
    >
      {{ _.capitalize(locale) }}
      <SvgIcon name="angle-down" :class="{ rotate: dropdown, dark: darkMode }" />
    </button>

    <transition>
      <div v-if="dropdown" class="dropdown-inner" v-on-click-outside="onClickOutsideHandler">
        <ul>
          <li :key="locale" v-for="locale in availableLocales">
            <NuxtLink class="locale" :to="switchLocalePath(locale)">
              {{ _.capitalize(locale) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.language-selector {
  position: relative;
  pointer-events: auto;
}

.language-button {
  @include p-body;
  display: flex;
  align-items: center;
  gap: 8px;
  color: $color-light-100;
}

.language-button.dark {
  color: $color-dark-200;
}

.rotate {
  transform: rotate(180deg);
}

.dropdown-inner {
  background-color: $color-light-100;
  padding: 8px 12px;
  position: absolute;
  left: 0;
  top: 28px;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 30px 40px 0 #1a237e0d;
}

.locale {
  @include p-body;
  color: $color-dark-200;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
