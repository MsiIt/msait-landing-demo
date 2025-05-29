<template>
  <div class="project">
    <ProjectHeader :item="item.properties" />
    <div v-for="component in components" :key="component.id">
      <component
        v-for="entity in component.data"
        :is="component.name"
        :key="entity.id"
        :item="entity"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectHeader from '~/components/pages/case/ProjectHeader.vue'
import { ContentEntityName } from '~/constants/index'
import VideoSection from '~/components/pages/case/VideoSection.vue'
import SliderSection from '~/components/pages/case/SliderSection.vue'
import TextSection from '~/components/pages/case/TextSection.vue'
import QuoteSection from '~/components/pages/case/QuoteSection.vue'

const props = defineProps({
  item: Object,
})

const { item } = props

const componentMappings = {
  [ContentEntityName.ProjectComponentVideo]: {
    id: 1,
    name: VideoSection,
  },
  [ContentEntityName.ProjectComponentSlider]: {
    id: 2,
    name: SliderSection,
  },
  [ContentEntityName.ProjectComponentFormattedText]: {
    id: 3,
    name: TextSection,
  },
  [ContentEntityName.ProjectComponentQuote]: {
    id: 4,
    name: QuoteSection,
  },
}

const components = item.relations
  .map((relation) => ({
    ...componentMappings[relation.symbolCode],
    data: relation.entities,
  }))
  .sort((a, b) => a.id - b.id)
  .filter((component) => component && component.data && component.data.length > 0)
</script>
