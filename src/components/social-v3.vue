<template>
  <div class="grid">
    <div class="flex items-center justify-center text-black gap-6">
      <nuxt-link :href="useRuntimeConfig().public.youtube" class="p-1 rounded-full border-inherit bg-white">
        <Icon size="32" name="bxl:youtube" />
      </nuxt-link>
      <nuxt-link :href="useRuntimeConfig().public.instagram" class="p-1 rounded-full border-inherit bg-white">
        <Icon size="32" name="bxl:instagram" />
      </nuxt-link>
      <nuxt-link :href="useRuntimeConfig().public.facebook" class="p-1 rounded-full border-inherit bg-white">
        <Icon size="32" name="bxl:facebook" />
      </nuxt-link>
    </div>
  </div>
</template>