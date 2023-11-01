<template>
    <div class="max-w-7xl mx-auto">
      <div class="grid py-16 lg:px-12 gap-12">
        <div class="max-w-6xl mx-auto w-full px-6 lg:px-12">
          <div class="text-white text-4xl font-light">
            Para quién es el <span class="font-black bg-clip">MASTER VAZ 2.0?</span>
          </div>
        </div>
        <ul class="grid gap-6 text-lg">
          <li v-for="(item, i) in useV2DataES().whoES" :key="i" class="bg-blue-800 py-4 max-md:px-6">
            <div class="max-w-5xl mx-auto w-full">
              <div v-html="item" />
            </div>
          </li>
        </ul>
        <div class="max-w-6xl mx-auto w-full px-6 lg:px-12">
          <div class="text-white text-lg lg:text-4xl font-light text-center">
            No importa si usted nunca operó antes o si ya tiene alguna <span class="font-bold">experiencia</span>, el torneo es una oportunidad única para
            desafiarse a sí mismo de una manera divertida!
          </div>
        </div>
      </div>
    </div>
  </template>