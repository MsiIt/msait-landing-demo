<template>
  <section class="description-section">
    <div class="container">
      <div class="wrapper">
        <p class="description">{{ description }}</p>
        <div class="developed">
          <p class="title">{{ $t('case.description-section.made-projects') }}</p>
          <div class="software">
            <NuxtLink
              v-for="item in filteredTabs"
              :key="item.id"
              :to="{ path: '/cases', query: { typeId: item.id } }"
            >
              <p class="software-item">
                {{ item.value }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ContentEntityName } from '~/constants/index'
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

const props = defineProps({
  project: Object,
})
const { project } = props

const description = project.properties.description.value
const projects = project.relations.find(
  (p) => p.symbolCode === ContentEntityName.ProjectComponent
)?.entities

const template = mainStore.contentTemplates.find((t) => t.symbolCode === ContentEntityName.Project)
const tabs = transformListToDict(template.properties).projectComponents.type.valueVariants
const filteredTabs = tabs.filter((tab) =>
  project.properties.projectComponents.value.includes(tab.id)
)
</script>

<style lang="scss" scoped>
.description-section {
  margin: 60px 0 120px;

  @include sm {
    margin: 60px 0 90px;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 60px;

  @include md {
    gap: 32px;
  }

  @include sm {
    flex-direction: column;
    align-items: unset;
  }
}

.description {
  max-width: 762px;
  width: 100%;
  @include p-large-body;

  padding-right: 60px;
  border-right: 2px solid $color-light-100;

  @include md {
    max-width: 490px;
    padding-right: 32px;
  }

  @include sm {
    max-width: 100%;
    padding-right: 0;
    border-right: none;
  }
}

.vertical-line {
  width: 2px;
  height: 100%;
  background: $color-light-100;
}

.title {
  @include p-text;
  margin-bottom: 24px;
}

.software {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.software-item {
  @include p-body-s;
  padding: 7px 16px;
  border-radius: 16px;
  background-color: $color-light-100;
  color: #1f4283;

  &:hover {
    cursor: pointer;
  }
}
</style>
