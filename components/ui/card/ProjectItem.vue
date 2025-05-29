<template>
  <NuxtLink :to="localePath(`/cases/${item.id}`)" class="project-item">
    <img :src="image" alt="product" class="project-image" />
    <div class="content">
      <p class="project-title">{{ title }}</p>
      <Breadcrumbs mode="blue" :list="components" />
      <div class="project-footer">
        <div class="company" @click.prevent="addTag">
          <p>{{ tag }}</p>
        </div>
        <SvgIcon name="indicator" class="indicator" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useMainStore } from '~/store/main'
import { ContentEntityName } from '~/constants/index'
import { transformListToDict } from '~/utils/entity'
import _ from 'lodash'

const mainStore = useMainStore()
const localePath = useLocalePath()

const props = defineProps({
  item: Object,
  onAddTag: Function,
})

const { item, onAddTag } = props

const image = item.properties.image?.value[0].url
const title = item.properties.title?.value
const tag = item.properties.tag?.value

const template = mainStore.contentTemplates.find((t) => t.symbolCode === ContentEntityName.Project)
const componentsVariant = transformListToDict(template.properties).projectComponents.type
  .valueVariants
const components = _.filter(componentsVariant, (obj) =>
  _.includes(item.properties.projectComponents?.value, obj.id)
)

const addTag = (e) => {
  onAddTag(tag)
}
</script>

<style scoped lang="scss">
.project-item {
  display: block;
  width: 100%;
  height: 371px;
  border-radius: 24px;
  background-color: $color-light-100;
  overflow: hidden;
  scroll-snap-align: start;
  flex-shrink: 0;

  /* transition */
  @include transition;
  transition-property: box-shadow, background-color;

  &:hover {
    box-shadow: 0 30px 40px 0 #1a237e0d;

    .indicator {
      transform: rotate(45deg);
      color: $color-main-200;
    }
  }

  &:active {
    background-color: lighten($color-main-100, 0);
  }
}

:deep(.project-image) {
  width: 100%;
  height: 193px;
  object-fit: cover;
}

.content {
  padding: 16px;
}

.project-title {
  @include h3-subtitle;
  color: $color-dark-200;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}

.company {
  @include p-body-s;
  padding: 8px 16px;
  border-radius: 16px;
  color: $color-main-200;
  background-color: $color-light-300;
  transition: background-color 0.5s ease;
  line-height: 16px;

  &:hover {
    cursor: pointer;
    background-color: $color-light-400;
    transition: background-color 0.5s ease;
  }
}

.indicator {
  color: $color-light-400;

  /* transition */
  @include transition;
  transition-property: transform, color;
}
</style>
