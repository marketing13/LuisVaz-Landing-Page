<template>
    <div class="max-w-6xl mx-auto">
      <div class="grid py-16 px-6 lg:px-12 gap-12">
        <div class="text-white text-4xl font-light">
          Por qué debería participar en <span class="font-black bg-clip">MASTER VAZ 2.0?</span>
        </div>
        <ul class="grid md:grid-cols-2 gap-6 text-lg">
          <li v-for="(item, i) in useV2DataES().whyES" :key="i" class="grid grid-flow-col gap-3 justify-start">
            <div>
              <div class="aspect-square w-4 bg-blue-600 rounded-full my-1" />
            </div>
            <div v-html="item" />
          </li>
        </ul>
      </div>
    </div>
  </template>