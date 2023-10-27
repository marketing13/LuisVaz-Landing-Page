<template>
  <div class="max-w-6xl mx-auto relative">
    <div class="grid py-16 px-6 relative items-center gap-12">
      <div class="uppercase font-black text-3xl lg:text-4xl text-center">
        você está prestes a vivenciar uma <br class="hidden lg:block">
        <span class="bg-clip-xp">
          grande transformação
        </span> <br class="hidden lg:block">
        nas principais áreas da sua vida
      </div>
      <div class="grid gap-3 grid-cols-2 lg:grid-cols-4 justify-between">
        <nuxt-img class="mx-auto h-full" src="/assets/images/xp/areas/financeiro.jpg" />
        <nuxt-img class="mx-auto h-full" src="/assets/images/xp/areas/saude.jpg" />
        <nuxt-img class="mx-auto h-full" src="/assets/images/xp/areas/familia.jpg" />
        <nuxt-img class="mx-auto h-full" src="/assets/images/xp/areas/espiritualidade.jpg" />
      </div>
      <div class="mx-auto">
        <xp-cta />
      </div>
      <div class="uppercase font-black text-3xl lg:text-4xl text-center">
        qual será <span class="bg-clip-xp">o caminho</span> percorrido em <br class="hidden lg:block"> direção a
        <span class="bg-clip-xp">
          prosperidade
        </span>
        ?
      </div>
      <div>
        <xp-postits />
      </div>
    </div>
  </div>
</template>