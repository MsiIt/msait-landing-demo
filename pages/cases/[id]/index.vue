<script setup lang="ts">
import { ContentEntityName } from '~/constants'
import ProjectComponents from '~/components/pages/case/ProjectComponents.vue'
import { transformResponse } from '~/utils/entity'

const { t: $t } = useI18n()
const { $contentApi } = useNuxtApp()
const route = useRoute()

const params = {
  filter: { id: route.params.id },
  pull: {
    properties: true,
    relations: [
      {
        symbolCode: 'projectComponent',
        entities: {
          properties: true,
          relations: [
            {
              symbolCode: 'projectComponentVideo',
              entities: { properties: true },
            },
            {
              symbolCode: 'projectComponentSlider',
              entities: {
                properties: true,
                relations: [
                  {
                    symbolCode: 'projectComponentSliderSlide',
                    entities: { properties: true },
                  },
                ],
              },
            },
            {
              symbolCode: 'projectComponentFormattedText',
              entities: { properties: true },
            },
            {
              symbolCode: 'projectComponentQuote',
              entities: { properties: true },
            },
            {
              symbolCode: 'projectComponentDevelopers',
              entities: { properties: true },
            },
          ],
        },
      },
    ],
  },
}

const { data } = await useAsyncData('project', async () => {
  const res = await $contentApi.getList(ContentEntityName.Project, params)
  return transformResponse(res.data.rows[0])
})
const project = data.value

const { data: similarProjects } = await useAsyncData('similarProjects', async () => {
  const params = {
    filter: {
      properties: [
        {
          symbolCode: 'tag',
          value: {
            substring: project.properties.tag.value,
          },
        },
      ],
    },
  }
  const res = await $contentApi.getList(ContentEntityName.Project, params)
  const projects = res.data.rows.map((p) => transformResponse(p))
  return projects.filter((el) => el.id !== Number(route.params.id))
})

const projectComponents = project.relations.find(
  (p) => p.symbolCode === ContentEntityName.ProjectComponent
)?.entities

const projectComponentDevelopers = projectComponents.flatMap((item) =>
  item.relations
    .filter((relation) => relation.symbolCode === 'projectComponentDevelopers')
    .flatMap((relation) => relation.entities.filter((entity) => entity.id))
)

const director = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Технический директор'
  })
  .map((developer) => developer.properties.names.value)

const backendDevelopers = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Бэкенд-разработчик'
  })
  .map((developer) => developer.properties.names.value)

const frontendDevelopers = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Фронтенд-разработчик'
  })
  .map((developer) => developer.properties.names.value)

const projectManagers = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Проджект-менеджер'
  })
  .map((developer) => developer.properties.names.value)

const webDesigners = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Веб-дизайнер'
  })
  .map((developer) => developer.properties.names.value)

const testers = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Тестировщик'
  })
  .map((developer) => developer.properties.names.value)

const marketers = projectComponentDevelopers
  .filter((entity) => {
    return entity.properties.jobTitle.value === 'Маркетолог'
  })
  .map((developer) => developer.properties.names.value)

const team = [
  {
    title: $t('case.team-section.director'),
    members: director,
  },
  {
    title: $t('case.team-section.backend-developers'),
    members: backendDevelopers,
  },
  {
    title: $t('case.team-section.frontend-developers'),
    members: frontendDevelopers,
  },
  {
    title: $t('case.team-section.projectManagers'),
    members: projectManagers,
  },
  {
    title: $t('case.team-section.web-designers'),
    members: webDesigners,
  },
  {
    title: $t('case.team-section.tester'),
    members: testers,
  },
  {
    title: $t('case.team-section.marketer'),
    members: marketers,
  },
].filter((teamMember) => teamMember.members.length > 0)
</script>

<template>
  <main>
    <TitleSection :project="project" />
    <DescriptionSection :project="project" />
    <div class="project" v-for="project in projectComponents" :key="project.id">
      <ProjectComponents :item="project" />
    </div>
    <TeamSection :team="team" />
    <ScrollItemsSection
      v-if="similarProjects.length && similarProjects.length > 1"
      :title="$t('case.projects-list-section.title')"
      :items="similarProjects"
    />
    <div class="offer-section">
      <OfferSection />
    </div>
  </main>
</template>

<style scoped lang="scss">
.offer-section {
  margin: 120px 0 60px;

  @include sm {
    margin: 90px 0 60px;
  }
}
.project {
  margin-top: 120px;

  @include sm {
    margin-top: 90px;
  }
}
</style>
