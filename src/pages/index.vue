<template>
  <div class="bg-clockbase text-light-100 min-h-[100svh]">
    <section>
      <client-only>
        <counter />
        <template #fallback>
          <counter-skeleton />
        </template>
      </client-only>
    </section>
    <section>
      <div class="max-w-5xl mx-auto aspect-[256/179] relative isloading rounded-md hidden md:block">
        <nuxt-img class="object-cover w-full h-full" src="/assets/images/dica-incrivel.jpg"
          sizes="xs:414px sm:600px lg:1024px" densities="x1 x2 x3 x4"
          aria-label="Estou aqui para compartilhar uma dica incrível que vai transformar sua jornada financeira! 
          Sou o Luís Vaz, e todos os dias, às 8h e às 18h, realizo lives imperdíveis onde compartilho entradas ao vivo em Opções Binárias e Forex." />
        <div class="absolute inset-0 grid justify-center items-end py-8 md:py-24">
          <nuxt-img src="/assets/images/scroll-alert.png" sizes="xs:16px sm:16px lg:32px xl:32px xxl:32px 2xl:32px"
            densities="x1 x2 x3 x4" class="animate-bounce w-4 sm:w-4 lg:w-8" />
        </div>
      </div>
      <div class="block md:hidden">
        <div class="max-w-5xl mx-auto aspect-[1024/1405] relative isloading rounded-md">
          <nuxt-img class="object-cover w-full h-full" src="/assets/images/dica-incrivel-mobile.jpg"
            sizes="xs:414px sm:600px lg:1024px" densities="x1 x2 x3 x4"
            aria-label="Estou aqui para compartilhar uma dica incrível que vai transformar sua jornada financeira! 
          Sou o Luís Vaz, e todos os dias, às 8h e às 18h, realizo lives imperdíveis onde compartilho entradas ao vivo em Opções Binárias e Forex." />
        </div>
        <div class="grid justify-center items-end py-8 md:py-24">
          <nuxt-img src="/assets/images/scroll-alert.png" sizes="xs:16px sm:16px lg:32px xl:32px xxl:32px 2xl:32px"
            densities="x1 x2 x3 x4" class="animate-bounce w-4 sm:w-4 lg:w-8" />
        </div>
      </div>
    </section>
    <section>
      <div
        class="max-w-3xl max-md:px-6 mx-auto grid md:grid-flow-col grid-flow-row md:grid-cols-2 gap-6 pb-24 max-sm:pb-12">
        <div class="max-w-md">
          <div class="grid gap-6 text-white max-sm:text-center">
            <div>
              <nuxt-img class="max-sm:mx-auto w-32 sm:w-32 lg:w-40" src="/assets/images/logo.png"
                sizes="xs:65px sm:120px lg:160px" densities="x1 x2 x3 x4" />
            </div>
            <div class="font-light text-2xl max-sm:text-xl">
              Isso mesmo, você terá
              a oportunidade de<br>
              pegar minhas dicas e
              <span class="bg-clip uppercase font-black whitespace-nowrap">ganhar dinheiro</span><br>
              em tempo real!
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-md">
            <form-fields />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto aspect-[1024/295] isloading rounded-md hidden md:block">
        <nuxt-img class="object-cover w-full h-full" src="/assets/images/canal-print.jpg"
          sizes="xs:414px sm:600px lg:1024px" densities="x1 x2 x3 x4" aria-label="LIVE DE OPERAÇÕES TODO DIA ÀS 08:00 E ÁS 18:00
          ATIVE AS NOTIFICAÇÕES
          Luis Vaz
          @olusVaz 60,3 mil subscritores 360 videos
          Subscrito
          Aderir
          Luis Vaz está no mercado financeiro a 12 anos. De engraxate a milionário" />
      </div>
      <div class="max-w-5xl mx-auto aspect-[751/568] isloading rounded-md block md:hidden">
        <nuxt-img class="object-cover w-full h-full" src="/assets/images/canal-print-mobile.jpg"
          sizes="xs:414px sm:600px lg:1024px" densities="x1 x2 x3 x4" />
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto py-12 flex justify-center px-6">
        <nuxt-link :href="useRuntimeConfig().public.youtube">
          <button class="golden-bg px-4 py-2 md:py-4 font-black rounded-full max-sm:text-xs min-md:text-md"
            type="submit">Conheça o meu canal e
            não perca as
            lives!
          </button>
        </nuxt-link>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto aspect-[256/153] relative isloading rounded-md hidden md:block">
        <nuxt-img class="object-cover w-full h-full" src="/assets/images/verdadeiro-tesouro.jpg"
          sizes="xs:414px sm:600px lg:1024px" densities="x1 x2 x3 x4"
          aria-label="No meu canal, você encontrará um verdadeiro tesouro de conhecimento e insights para alcançar seus objetivos financeiros. Sou apaixonado por ajudar as pessoas a prosperarem, e nas minhas lives diárias, compartilho estratégias poderosas e análises em tempo real." />
        <div class="absolute inset-0 grid justify-center items-end py-3 md:py-6">
          <nuxt-img src="/assets/images/scroll-alert.png" sizes="xs:16px sm:16px lg:32px xl:32px xxl:32px 2xl:32px"
            class="animate-bounce w-4 sm:w-4 lg:w-8" />
        </div>
      </div>
      <div class="block md:hidden">
        <div class="max-w-5xl mx-auto aspect-[1024/1154] relative isloading rounded-md">
          <nuxt-img class="object-cover w-full h-full" src="/assets/images/verdadeiro-tesouro-mobile.jpg"
            sizes="xs:414px sm:600px lg:1024px" densities="x1 x2 x3 x4"
            aria-label="No meu canal, você encontrará um verdadeiro tesouro de conhecimento e insights para alcançar seus objetivos financeiros. Sou apaixonado por ajudar as pessoas a prosperarem, e nas minhas lives diárias, compartilho estratégias poderosas e análises em tempo real." />
        </div>
        <div class="grid justify-center items-end py-8 md:py-24">
          <nuxt-img src="/assets/images/scroll-alert.png" sizes="xs:16px sm:16px lg:32px xl:32px xxl:32px 2xl:32px"
            densities="x1 x2 x3 x4" class="animate-bounce w-4 sm:w-4 lg:w-8" />
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl max-sm:px-6 mx-auto relative py-12 grid gap-12">
        <div class="text-center">
          <span class="text-white max-sm:text-xl text-4xl">
            O que você pode esperar <br>
            das minhas lives:
          </span>
        </div>
        <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <card v-for="(carditem, i) in useData().aboutlives" :key="i" :data="carditem" />
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto grid justify-center items-end py-16">
        <nuxt-img src="/assets/images/scroll-alert.png" sizes="xs:16px sm:16px lg:32px xl:32px xxl:32px 2xl:32px"
          densities="x1 x2 x3 x4" class="animate-bounce w-4 sm:w-4 lg:w-8" />
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto max-sm:px-6 grid gap-8 py-6">
        <div class="text-white text-center text-4xl max-sm:text-2xl max-w-xl mx-auto leading-[50px]">
          <div class="font-semibold">
            Agora é a sua vez de embarcar
            nessa jornada rumo ao
          </div>
          <span class="golden-bg whitespace-nowrap px-3 text-black font-bold rounded-sm">sucesso financeiro!</span>
        </div>
        <div class="max-w-sm text-center mx-auto text-stone-400">
          Clique no botão abaixo e inscreva-se
          no meu canal do YouTube agora mesmo.
        </div>
        <div class="text-center">
          <nuxt-link :href="useRuntimeConfig().public.youtube">
            <button class="max-sm:text-xs min-md:text-md golden-bg px-4 py-2 font-bold rounded-full" type="submit">
              Quero me inscrever no canal do Luís Vaz
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto max-sm:px-6 grid gap-8 py-6">
        <div class="max-w-md text-center mx-auto text-stone-400 grid gap-6">
          <div>Juntos, vamos construir uma comunidade de sucesso!</div>
          <div>
            Grande abraço,<br>
            Luís Vaz
          </div>
          <div>www.oluisvaz.com</div>
          <div class="pt-6">Siga-me nas redes sociais:</div>
          <social />
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto text-center py-24 text-stone-400">
        Todos os direitos reservados © — VazTraders
      </div>
    </section>
</div></template>