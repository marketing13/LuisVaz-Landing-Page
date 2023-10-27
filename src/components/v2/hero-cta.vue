<template>
  <div class="max-w-7xl mx-auto relative grid">
    <div class="relative lg:absolute top-0 isloading aspect-[1920/1162] min-w-full rounded-b-3xl">
      <nuxt-img placeholder class="hidden lg:block min-w-full" src="/assets/images/v2/cta.png" />
      <nuxt-img placeholder class="lg:hidden min-w-full" src="/assets/images/v2/cta.png" />
    </div>
    <div class="lg:aspect-[1920/1162] lg:pl-80 grid">
      <div class="grid items-center">
        <div class="grid py-16 px-6 lg:px-12 relative">
          <div class="grid gap-6">
            <div class="text-white text-5xl font-light">
              O que fazer para participar?
            </div>
            <div class="grid gap-6 text-xl max-w-3xl">
              <div>
                Para participar do torneio <b>MASTER VAZ 2.0</b>, basta preencher o formulário de inscrição com os seus
                dados, que a nossa equipe entrará em contato para passar todas as instruções necessárias.
              </div>
              <div>
                Mas não perca tempo, pois as vagas são limitadas e podem se esgotar a qualquer momento.
              </div>
              <div>
                <ul class="grid md:grid-cols-2 gap-6 text-lg">
                  <li v-for="(item, i) in useV2Data().cta" :key="i" class="grid grid-flow-col gap-3 justify-start">
                    <div>
                      <div class="aspect-square w-4 bg-blue-600 rounded-full my-1" />
                    </div>
                    <div v-html="item" />
                  </li>
                </ul>
              </div>
              <div class="grid gap-3">
                <div>
                  <nuxt-link :to="{ name: 'MasterVaz', hash: '#Hero' }">
                    <button class="golden-bg-xp px-6 py-3 font-black rounded-2xl text-lg text-center text-black">
                      QUERO PARTICIPAR DO TORNEIO MASTER VAZ</button>
                  </nuxt-link>
                </div>
                <div>
                  *Vagas limitadas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>