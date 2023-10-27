<template>
  <div class="max-w-7xl w-full mx-auto relative grid">
    <div class="grid py-16 lg:px-12 gap-12">
      <div class="text-4xl text-center">
        Regras do Torneio:
      </div>
      <div>
        <ul class="grid gap-1 text-lg">
          <li v-for="(item, i) in useV2Data().rules" :key="i" class="py-4 max-md:px-6">
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
        Não deixe passar essa
        <b>oportunidade unica</b> de aprender
        a operar na pratica, se divertir e ainda ganhar prêmios incríveis!
      </div>
      <div class="text-xl max-w-3xl text-center mx-auto">
        Não importa se você é um novato querendo aprender ou um profissional experiente, todos são bem-vindos a
        participar.
      </div>
      <div class="text-xl max-w-3xl text-center mx-auto grid gap-3">
        <div>
          Prepare-se para o desafio e junte-se a nós no
        </div>
        <div class="bg-clip font-black">
          Torneio MASTER VAZ 2.0!
        </div>
        <div>
          Faça o seu cadastro AGORA MESMO!
        </div>
        <div class="grid gap-3 max-w-lg">
          <div class="grid">
            <nuxt-link :to="{ name: 'MasterVaz', hash: '#Hero' }">
              <button class="golden-bg-xp text-black px-4 py-3 font-black rounded-2xl text-md text-center">
                QUERO APROVEITAR ESTA OPORTUNIDADE
              </button>
            </nuxt-link>
          </div>
          <div class="text-sm">
            *Seus dados estão protegidos. Respeitamos a sua privacidade.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>