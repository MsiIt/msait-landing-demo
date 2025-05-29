<template>
  <section class="title-section">
    <div class="gradient-container" />
    <NuxtImg :src="bgImage" alt="background-image" class="bg" />
    <div class="container">
      <div class="wrapper">
        <div class="content">
          <Breadcrumbs class="breadcrumbs-path" :list="breadcrumbsPath" />
          <p class="direction">{{ tag }}</p>
          <h2 class="title">{{ title }}</h2>
          <Breadcrumbs :list="components" />
        </div>

        <div class="superhero-container">
          <NuxtImg
            :src="companyLogo"
            width="260"
            height="auto"
            alt="superhero"
            class="hidden--sm superhero"
          />
        </div>
      </div>
    </div>
    <NuxtImg src="/assets/vectors/subtract.svg" class="bottom-round" />
  </section>
</template>

<script setup>
import { ContentEntityName } from '~/constants/index'
import { transformListToDict } from '~/utils/entity'
import _ from 'lodash'
import { useMainStore } from '~/store/main'

const props = defineProps({
  project: Object,
})
const { project } = props
const { t } = useI18n()
const localePath = useLocalePath()
const mainStore = useMainStore()

const tag = project.properties.tag.value
const title = project.properties.title.value
const bgImage = project.properties.image.value[0].url
const companyLogo = project.properties.logo.value[0].url
const companyName = project.properties.name.value

const breadcrumbsPath = computed(() => [
  { value: t('header.links.cases'), path: localePath('/cases') },
  { value: companyName, path: localePath(`/cases/${project.id}`) },
])

const template = mainStore.contentTemplates.find((t) => t.symbolCode === ContentEntityName.Project)
const componentsVariant = transformListToDict(template.properties).projectComponents.type
  .valueVariants
const components = _.filter(componentsVariant, (obj) =>
  _.includes(project.properties.projectComponents.value, obj.id)
).map((i) => ({
  ...i,
  path: localePath(`/cases?typeId=${i.id}`),
}))
</script>

<style lang="scss" scoped>
.title-section {
  padding: 199px 0 167px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @include md {
    padding-bottom: 114px;
  }

  @include sm {
    padding: 182px 0 92px;
  }
}
.gradient-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 90px;
  color: $color-light-100;
}

.content {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
}

:deep(.breadcrumbs-path) {
  @include p-body;
}

.direction {
  @include p-body-s;
  margin-top: 47px;
  color: #1f4283;
  border-radius: 16px;
  padding: 7px 16px;
  background-color: $color-light-100;
}

.title {
  @include h1-title;

  @include sm {
    @include h2-title;
  }
}

.subtitle {
  @include p-body;
}

.superhero-container {
  align-self: stretch;
  display: flex;
  align-items: center;
  //justify-content: center;

  .superhero {
    @include sm {
      width: 179px;
    }
  }
}

.bottom-round {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
}
</style>
