export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client){
    const headers = useRequestHeaders(['cookie']);
    await $fetch('/api/v1/session', { headers, query: { ...to.query, name: to.name } })
  }
})