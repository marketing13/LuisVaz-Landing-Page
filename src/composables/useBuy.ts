export const useBuyExperience = async () => {
  const headers = useRequestHeaders(['cookie']);
  const route = useRoute();
  const windowReference = window.open();

  await $fetch('/api/v1/buy-experience', { method: 'POST', headers, query: { ...route.query, name: route.name }, body: { action: 'Comprar VazExperience' } })
    .finally(() => {
      windowReference.location = 'https://sun.eduzz.com/2091427';
    })

}