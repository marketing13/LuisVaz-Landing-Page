<template>
  <div class="grid">
    <div class="flex items-center justify-center text-[#aa9055] border-[#aa9055] gap-6">
      <nuxt-link :href="useRuntimeConfig().public.youtube" class="border-4 p-1 rounded-full border-inherit">
        <Icon size="32" name="bxl:youtube" />
      </nuxt-link>
      <nuxt-link :href="useRuntimeConfig().public.instagram" class="border-4 p-1 rounded-full border-inherit">
        <Icon size="32" name="bxl:instagram" />
      </nuxt-link>
      <nuxt-link :href="useRuntimeConfig().public.facebook" class="border-4 p-1 rounded-full border-inherit">
        <Icon size="32" name="bxl:facebook" />
      </nuxt-link>
    </div>
  </div>
</template>