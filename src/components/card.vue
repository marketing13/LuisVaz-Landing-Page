<template>
  <div class="golden-bg text-center items-start p-6 rounded-3xl">
    <div class="grid gap-3">
      <nuxt-img sizes="xs:64px sm:64px lg:64px" class="mx-auto w-16" densities="x1 x2 x3 x4" :src="`/assets/icons/${data.icon}`" :alt="data.title" />
      <h3 v-if="data.title" class="text-lg px-6 font-bold" v-html="data.title" />
      <div v-if="data.content" v-html="data.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICard } from "@/types"
defineProps<{ data: ICard }>()
</script>