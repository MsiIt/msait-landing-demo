export default defineEventHandler(async (event) => {
  const proxyUrl = useRuntimeConfig().apiInnerUrl

  return {
    apiUrl: proxyUrl,
  }
})
