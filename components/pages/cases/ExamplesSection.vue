<script setup>
import { useMainStore } from '~/store/main'
import { ContentEntityName } from '~/constants/index'
import { transformListToDict } from '~/utils/entity'

const { t: $t } = useI18n()
const { $contentApi } = useNuxtApp()
const route = useRoute()
const tags = ref([])

const mainStore = useMainStore()
const selectedTab = ref(Number(route.query.typeId ?? 0))

const fetchProjects = async () => {
  const params = {}
  const { data } = await $contentApi.getList(ContentEntityName.Project, params)
  return data.rows.map((item) => transformResponse(item))
}

const { data: allProjects, refresh } = useAsyncData('projects', fetchProjects)

const projects = computed(() => {
  if (!allProjects.value) return []
  if (selectedTab.value === 0 && tags.value.length === 0) return allProjects.value
  return allProjects.value.filter((project) => {
    const hasSelectedTag =
      tags.value.length === 0 || tags.value.includes(project.properties.tag.value)
    const hasSelectedTab =
      selectedTab.value === 0 ||
      project.properties.projectComponents.value.includes(selectedTab.value)
    return hasSelectedTag && hasSelectedTab
  })
})

const template = mainStore.contentTemplates.find((t) => t.symbolCode === ContentEntityName.Project)
const tabs = transformListToDict(template.properties).projectComponents.type.valueVariants
const options = [{ id: 0, value: $t('cases.projects-section.tabs.all') }, ...tabs]

const addTag = (tag) => {
  if (!tags.value.includes(tag)) {
    tags.value.push(tag)
  }
}

const removeTag = (tag) => {
  tags.value = tags.value?.filter((t) => t !== tag)
}
</script>

<template>
  <section>
    <div class="container">
      <div>
        <Tabs v-model="selectedTab" :options="options" class="tabs" />

        <ul class="tags" v-if="tags.length > 0">
          <li v-for="(tag, index) in tags" :key="index" @click="removeTag(tag)">
            {{ tag }}
            <div class="close">
              <SvgIcon name="close" width="7" height="7" />
            </div>
          </li>
        </ul>
        <div class="list" v-if="projects">
          <ProjectItem v-for="item in projects" :key="item.id" :item="item" :on-add-tag="addTag" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tabs {
  border-bottom: 1px solid $color-light-100;
  margin-bottom: 24px;
  padding-bottom: 24px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.tags li {
  position: relative;
  @include p-text;
  padding: 4px 16px;
  padding-right: 24px;
  color: $color-main-200;
  border: none;
  border-radius: 20px;
  background-color: $color-light-100;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.tags li:hover {
  background-color: #e0e0e0;
}

.close {
  position: absolute;
  top: 0;
  right: 10px;
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }

  @include sm {
    grid-template-columns: 1fr;
  }
}
</style>
