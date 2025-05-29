import { ContentEntityName } from '~/constants'
import { useMainStore } from '~/store/main'

export default defineNuxtRouteMiddleware(async (from, to) => {
  const { $contentApi } = useNuxtApp()
  const mainStore = useMainStore()

  if (!mainStore.contentTemplates) {
    const contentTemplatesRes = await $contentApi.getTemplate()
    mainStore.contentTemplates = contentTemplatesRes.data
  }

  if (!mainStore.projects) {
    const projectsRes = await $contentApi.getList(ContentEntityName.Project)
    mainStore.projects = projectsRes.data.rows.map((item) => transformResponse(item))
  }
})
