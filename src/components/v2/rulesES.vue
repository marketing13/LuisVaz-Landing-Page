<template>
  <div class="max-w-7xl w-full mx-auto relative grid">
    <div class="grid py-16 lg:px-12 gap-12">
      <div class="text-4xl text-center">
        Reglas del torneo:
      </div>
      <div>
        <ul class="grid gap-1 text-lg">
          <li v-for="(item, i) in useV2DataES().rulesES" :key="i" class="py-4 max-md:px-6">
            <div class="max-w-5xl mx-auto w-full grid grid-flow-col justify-start gap-6">
              <div>
                <Icon name="mdi:close" />
              </div>
              <div>
                <div v-html="item" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="text-4xl max-w-3xl text-center mx-auto">
        No deje pasar esa
        <b>oportunidad única</b> de aprender
        a operar practicando, de  forma divbertida y al mismo tiempo ganar premios increíbles!
      </div>
      <div class="text-xl max-w-3xl text-center mx-auto">
        No importa si eres un principiante que busca aprender o un profesional experimentado, todos son bienvenidos
        a participar.
      </div>
      <div class="text-xl max-w-3xl text-center mx-auto grid gap-3">
        <div>
          Prepárate para el desafío y únete a nosotros en el 
        </div>
        <div class="bg-clip font-black">
          Torneo MASTER VAZ 2.0!
        </div>
        <div>
          Haga su registro AHORA MISMO!
        </div>  
        <div class="grid gap-3 max-w-lg">
          <div class="grid">
            <nuxt-link :to="{ name: 'MasterVaz', hash: '#Hero' }">
              <button class="golden-bg-xp text-black px-4 py-3 font-black rounded-2xl text-md text-center">
                QUIERO APROVECHAR ESTA OPORTUNIDAD
              </button>
            </nuxt-link>
          </div>
          <div class="text-sm">
            *sus datos están protegido. respetamos su privacidad.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>