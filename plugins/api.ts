import axios from 'axios'
import ContentApi from '~/api/ContentApi'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const instance = axios.create({
    baseURL: import.meta.server ? `${config.apiInnerUrl}` : `/api`,
  })

  return {
    provide: {
      contentApi: new ContentApi(instance),
    },
  }
})
