<template>
  <div class="container">
    <div class="header">
      <h3 class="title main-gradient-text">
        <template v-if="item.url && item.url.value">
          <NuxtLink :to="localePath(`${item.url.value}`)">
            {{ item.title.value }}
          </NuxtLink>
        </template>
        <template v-else>
          {{ item.title.value }}
        </template>
      </h3>
      <div class="stack" v-if="technologies.length">
        <!-- <CustomNuxtImg src="/images/stack.png" width="23" height="20" alt="stack" /> -->
        <SvgIcon name="stack" />
        <NuxtLink
          v-for="tech in technologies"
          :key="tech.id"
          :to="{ path: '/services', hash: '#technologies', query: { technologyId: tech.localId } }"
          class="stack-text"
        >
          {{ tech.value }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/store/main'
import { ContentEntityName } from '~/constants/index'
import { transformListToDict } from '~/utils/entity'
import _ from 'lodash'

const mainStore = useMainStore()
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const { item } = props

const template = mainStore.contentTemplates.find(
  (t) => t.symbolCode === ContentEntityName.ProjectComponent
)
const valueVariantsTechnologies = transformListToDict(template.properties).technologies.type
  .valueVariants

const localIdByRemoteIt = {
  1: 23,
  2: 4,
  3: 5,
  4: 9,
  5: 22,
  6: 24,
  7: 12,
  8: 11,
  9: 18,
  10: 2,
  11: 25,
  12: 14,
  13: 15,
  14: 6,
  15: 13,
  16: 8,
  17: 16,
  18: 17,
  19: 19,
  20: 20,
  21: 26,
}

const technologies = _.filter(valueVariantsTechnologies, (obj) =>
  _.includes(item.technologies.value, obj.id)
).map((t) => _.assign(t, { localId: localIdByRemoteIt[t.id] }))
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  @include sm {
    flex-direction: column;
    align-items: unset;
    gap: 24px;
  }
}

.title {
  @include h2-title;
}

.stack {
  @include p-body-s;
  display: flex;
  gap: 16px;
  align-items: center;
}

.stack-text {
  color: $color-dark-200;
  @include transition;
  transition-property: color;

  &:hover {
    color: lighten($color-dark-200, 20);
  }

  @include xs {
    font-size: 13px;
  }
}
</style>
