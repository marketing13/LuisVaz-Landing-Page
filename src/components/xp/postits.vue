<template>
  <div class="grid md:grid-cols-2 lg:flex flex-row flex-wrap justify-center">
    <div class="basis-1/3 p-2 grid" v-for="(item, i) in useXpData().path" :key="i">
      <div class="rounded-t-xl border border-[#f1e478] bg-[#f1e478]">
        <div class="rounded-t-xl bg-black p-3 shadow-xl relative text-center">
          {{ item.title }}
        </div>
        <div v-html="item.content" class="text-black py-3 px-6 text-center">
        </div>
      </div>
    </div>
  </div>
</template>