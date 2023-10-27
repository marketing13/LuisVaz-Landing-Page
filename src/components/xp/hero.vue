<template>
  <div class="max-w-6xl mx-auto relative">
    <div class="absolute top-0 isloading aspect-[1280/653] min-w-full rounded-b-3xl">
      <nuxt-img src="/assets/images/xp/hero.jpg" />
    </div>
    <div class="grid lg:grid-cols-2 py-16 px-6 relative">
      <div class="grid gap-3">
        <div>
          <nuxt-img fit="cover" :width="82" src="/assets/images/xp/xp-logo.png" />
        </div>
        <div class="text-4xl font-bold">
          Destrave a prosperidade em todas as áreas da sua vida em 2 dias de imersão.
        </div>
        <div>
          Uma imersão transformadora onde você aprenderá, na prática, através de exercícios de autoanálise e ferramentas
          valiosas, como desbloquear a prosperidade em todas as áreas da sua vida.
        </div>
        <div class="grid lg:grid-flow-col justify-start gap-6">
          <div class="max-w-xs">
            <div class="flex gap-2">
              <div class="grid items-center max-h-6">
                <nuxt-img fit="cover" :width="14" src="/assets/images/xp/relogio.png" />
              </div>
              <span>
                16 e 17 de Dezembro
              </span>
            </div>
          </div>
          <div class="max-w-xs">
            <div class="flex gap-2">
              <div class="grid items-center max-h-6">
                <nuxt-img fit="cover" :width="14" src="/assets/images/xp/agulha.png" />
              </div>
              <span>
                Centro de Convenções e Eventos GPM Alphaville - Barueri - SP
              </span>
            </div>
          </div>
        </div>
        <div>
          <xp-cta />
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>