<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid py-16 lg:px-12 gap-12">
      <div class="max-w-6xl mx-auto w-full px-6 lg:px-12">
        <div class="text-white text-4xl font-light">
          Para quem é a <span class="font-black bg-clip">MASTER VAZ 2.0?</span>
        </div>
      </div>
      <ul class="grid gap-6 text-lg">
        <li v-for="(item, i) in useV2Data().who" :key="i" class="bg-blue-800 py-4 max-md:px-6">
          <div class="max-w-5xl mx-auto w-full">
            <div v-html="item" />
          </div>
        </li>
      </ul>
      <div class="max-w-6xl mx-auto w-full px-6 lg:px-12">
        <div class="text-white text-lg lg:text-4xl font-light text-center">
          Não importa se você nunca operou antes ou se já tem alguma <span class="font-bold">experiência</span>, o torneio é uma oportunidade única de se
          desafiar e se divertir!
        </div>
      </div>
    </div>
  </div>
</template>