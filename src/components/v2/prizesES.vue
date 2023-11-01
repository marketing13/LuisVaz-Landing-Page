<template>
    <div class="max-w-7xl w-full mx-auto relative grid">
      <div class="grid py-16 lg:px-12 gap-12">
        <div class="text-white text-center text-4xl font-light">
          Cuál será tu premio
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 lg:px-0">
          <div v-for="(item, i) in useV2Data().prizes">
            <div class="border p-6 grid gap-6">
              <div>
                <nuxt-img placeholder class="mx-auto" width="48px" src="/assets/images/star.png"></nuxt-img>
              </div>
              <div class="text-center grid gap-2">
                <div class="text-xl font-black">
                  {{ i === 3 ? '4° e 5° LUGAR' : i + 1 + '° LUGAR' }}
                </div>
                <div class="text-xl font-black">
                {{ useV2Data().prizes[i] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-3 text-center">
          <div>
            LOS TRES PRIMERO LUGARES RECIBIRÁN
            UN TROFEO PERSONALIZADO DE 
          </div>
          <div class="text-4xl font-bold">
            MASTER VAZ 2.0
          </div>
          <div>
            ES MOMENTO DE BRILLAR Y LLEVAR CONTIGO UNA
            GRAN SUMA DE DINERO!
          </div>
        </div>
      </div>
    </div>
  </template>