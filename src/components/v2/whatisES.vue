<template>
    <div class="max-w-6xl mx-auto">
      <div class="grid py-16 px-6 lg:px-12 gap-12">
        <div class="text-white text-4xl font-light">
            Que será el torneo <span class="font-black bg-clip">MASTER VAZ 2.0?</span>
        </div>
        <ul class="grid md:grid-cols-2 gap-6 text-lg">
          <li v-for="(item, i) in useV2DataES().whatisES" :key="i">
            <div v-html="item" />
          </li>
        </ul>
      </div>
    </div>
  </template>