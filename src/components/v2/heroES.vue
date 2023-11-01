<template>
    <div class="max-w-7xl mx-auto relative grid">
      <div class="relative lg:absolute top-0 isloading aspect-[1920/1211] min-w-full rounded-b-3xl">
        <nuxt-img class="hidden lg:block" src="/assets/images/v2/hero.png" />
        <nuxt-img class="lg:hidden" src="/assets/images/v2/hero-md.png" />
      </div>
      <div class="lg:aspect-[1920/1211] grid items-center" id="Hero">
        <div class="grid py-16 px-6 lg:px-12 relative">
          <div class="grid gap-3">
            <div class="text-white text-6xl font-black">
              MASTER VAZ 2.0
            </div>
            <div class="grid gap-3 max-w-md">
              <div>
                Comience  hoy en el mercado financiero, inclusive accediendo a premios increíbles!
              </div>
              <V2FormFieldsES />
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </template>