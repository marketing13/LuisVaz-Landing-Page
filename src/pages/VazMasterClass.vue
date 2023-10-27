<template>
  <div class="bg-clockbase text-light-100 min-h-[100svh]">
    <div class="md:mb-6">
      <div class="relative">
        <div class="relative md:absolute inset-0">
          <div class="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-full py-12">
            <div class="grid items-center max-md:px-6">
              <div class="grid gap-6 md:relative z-10">
                <div class="min-h-full">
                  <nuxt-img class="w-28 lg:w-30" src="/assets/images/logo.png" sizes="xs:65px sm:120px lg:160px"
                    densities="x1 x2 x3 x4" />
                </div>
                <div>
                  <div class="text-white font-medium text-1xl">
                    Bem vindo (a) à
                  </div>
                  <span class="bg-clip font-black whitespace-nowrap text-4xl">Vaz MasterClass</span>
                  <div class="text-white font-light text-1xl">
                    Descubra os segredos do <br>
                    Mercado Financeiro com <span class="font-bold">Luis Vaz</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- whitespace -->
            </div>
          </div>
        </div>
        <div class="w-auto">
          <!-- backgrounds -->
          <div class="hidden lg:block max-w-7xl mx-auto aspect-[1280/260] relative isloading rounded-md">
            <nuxt-img src="/assets/images/hero-bg.jpg" alt="" />
          </div>
          <div class="hidden md:block lg:hidden max-w-7xl mx-auto aspect-[802/260] relative isloading rounded-md">
            <nuxt-img src="/assets/images/hero-bg-sm.jpg" class="min-w-full min-h-full" alt="" />
          </div>
          <div class="block md:hidden max-w-7xl mx-auto aspect-[501/296] relative isloading rounded-md">
            <nuxt-img src="/assets/images/hero-bg-xs.jpg" class="min-w-full min-h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
    <section
      class="bg-[url(/assets/images/welcome-bg-sm.jpg)] md:bg-[url(/assets/images/welcome-bg.jpg)] relative bg-contain bg-repeat-y max-w-7xl mx-auto mb-24 pb-24">
      <div class="grid gap-6">
        <div>
          <div class="max-w-xl max-md:px-6 mx-auto text-center text-white">
            Se você está buscando uma oportunidade de dominar o
            <span class="bg-clip font-bold whitespace-nowrap">mercado financeiro</span>,
            operar com confiança e obter sucesso em
            suas negociações, então você está no lugar certo.
          </div>
        </div>
        <div class="text-center">
          <Icon class="text-yellow-500 my-6 float" size="40" name="mdi:chevron-down" />
        </div>
        <div class="relative max-w-2xl max-md:px-6 mx-auto text-center text-white grid gap-12 mb-12">
          <Transition enter-active-class="animate__animated animate__fadeInRight"
            leave-active-class="animate__animated animate__fadeOutLeft">
            <nuxt-img v-if="firstDolarVisible" src="/assets/images/dolar-0.png"
              class="hidden xl:block absolute -left-40" />
          </Transition>
          <Transition enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutRight">
            <nuxt-img v-if="firstDolarVisible" src="/assets/images/dolar-1.png"
              class="hidden xl:block absolute -right-40" />
          </Transition>
          <div ref="targetone" class="max-w-xl max-md:px-6 mx-auto text-center text-white text-xl md:text-3xl">
            Eu sou o <span class="font-bold">Luis Vaz</span> e estou muito animado
            em apresentar a
            <span class="bg-clip font-black whitespace-nowrap">Vaz MasterClass</span>
          </div>
          <div class="grid gap-3">
            <div class="font-bold">O que é a Vaz MasterClass?</div>
            <div>
              A <span class="bg-clip font-black whitespace-nowrap">Vaz MasterClass</span> é um curso completo, projetado
              para iniciantes<br class="max-lg:hidden"> e traders experientes que desejam aprimorar
              suas habilidades<br class="max-lg:hidden"> de negociação para obter resultados <i>consistentes no
                mercado</i>.
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-light text-black">
            <card v-for="(carditem, i) in useData().aboutCourse" :key="i" :data="carditem" />
          </div>
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto text-light text-white">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="md:block hidden max-w-7xl aspect-[247/520] relative isloading rounded-md">
              <nuxt-img src="/assets/images/acesso-etapas.jpg" class="min-w-full min-h-full" alt="" />
            </div>
            <div class="md:col-span-2 grid gap-6">
              <div class="text-2xl max-w-sm max-sm:text-center uppercase font-bold">
                Ao garantir <span class="text-[#efbe50]">sua vaga</span> você terá acesso:
              </div>
              <div class="grid gap-2">
                <div v-for="(info, i) in useData().aboutAccess" :key="i">
                  <div class="flex gap-3">
                    <span class="text-[#efbe50] font-black uppercase whitespace-nowrap text-xl">{{
                      info.number.toString().padStart(2, '0') }}:</span><span>{{ info.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <Icon class="text-yellow-500 my-6 float" size="40" name="mdi:chevron-down" />
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto grid gap-10">
          <Transition enter-active-class="animate__animated animate__fadeInTopLeft"
            leave-active-class="animate__animated animate__fadeOutBottomRight">
            <nuxt-img v-if="secondDolarVisible" src="/assets/images/dolar-3.png"
              class="hidden xl:block absolute -left-0" />
          </Transition>
          <div ref="targettwo" class="max-w-3xl text-white text-center text-xl relative">
            Com base de <span class="bg-clip font-black">12 anos</span> de experiência no mercado financeiro, desenvolvi a
            <span class="bg-clip font-black whitespace-nowrap">Vaz MasterClass</span>, ela aborda desde os
            conceitos básicos até as estratégias avançadas, tudo para que você tenha segurança
            e lucratividade em suas operações.
          </div>
          <div class="text-center text-[#efbe50] font-black whitespace-nowrap text-2xl md:text-4xl">
            Grade Curricular
          </div>
          <div class="md:columns-2 max-w-3xl mx-auto text-light text-white">
            <div v-for="(lesson, i) in useData().aboutLessons" :key="i" class="mb-3">
              <div class="flex gap-3">
                <span class="text-[#efbe50] font-black uppercase whitespace-nowrap">Aula {{ lesson.number
                }}:</span>
                <span>{{ lesson.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <Icon class="text-yellow-500 my-6 float" size="40" name="mdi:chevron-down" />
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto text-light text-white">
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="max-sm:max-w-xs mx-auto max-w-7xl aspect-[400/386] relative rounded-md">
              <nuxt-img src="/assets/images/recorte-cta.png" class="min-w-full min-h-full" alt="" />
            </div>
            <div class="grid gap-6 pt-3">
              <div class="text-2xl max-md:mx-auto bg-clip max-w-xs max-md:text-center uppercase font-medium">
                Não perca tempo,<br>
                as vagas são
                <span class="font-black">limitadas!</span>
              </div>
              <div class="max-md:text-center">
                Garanta sua vaga na <span class="text-[#efbe50] font-bold">Vaz MasterClass</span> e
                trilhe o caminho para o sucesso financeiro.
                Seja parte de um grupo seleto de traders
                que estão obtendo resultados consistentes.
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto text-light text-xl text-center text-white">
          Investir em conhecimento é a chave para alcançar seus objetivos financeiros.<br>
          A <span class="text-[#efbe50] font-bold">Vaz MasterClass</span> está esperando por você!
        </div>
        <div class="text-center">
          <nuxt-link :href="useRuntimeConfig().public.compra">
            <button class="max-sm:text-xs min-md:text-md golden-bg px-4 py-2 font-bold rounded-full" type="submit">
              Quero Garantir Minha Vaga Agora!
            </button>
          </nuxt-link>
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto text-light text-xl text-center text-white">
          Ou entre em contato para tirar suas <br class="max-md:hidden"> dúvidas <span class="text-[#efbe50] font-bold">agora mesmo.</span>
        </div>
        <div class="text-center">
          <nuxt-link :href="useRuntimeConfig().public.whatsapp">
            <button class="max-sm:text-xs min-md:text-md golden-bg px-4 py-2 font-bold rounded-full" type="submit">
              WhatsApp Luis Vaz
            </button>
          </nuxt-link>
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto text-light text-white md:mb-12">
          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="grid gap-6 md:pt-24">
              <div class="text-2xl max-md:mx-auto max-w-xs max-md:text-center uppercase grid gap-1">
                <div class="bg-clip text-sm font-black">Quem será o seu mentor</div>
                <span class="font-black">Conheça o Luis Vaz</span>
              </div>
              <div class="max-sm:text-center grid gap-3">
                <div>
                  Engraxate, limpador de túmulos, garçom e tantas outras já foram as suas profissões. Em 2010 tomou a
                  decisão que mudaria a sua vida, ingressou no mercado financeiro.
                </div>
                <div>
                  Entre altos e baixos, aprendeu e
                  desenvolveu técnicas de operação e mentalidade únicas das quais
                  mudaram a sua forma de operar no mercado e hoje dedica-se a ensinar milhares de pessoas sobre o
                  mercado financeiro, investimentos, mentalidade e muito mais.
                </div>
                <div>
                  Hoje Luis Vaz opera diariamente em seu canal no youtube com mais de 60 mil inscritos, compartilha sua
                  vida
                  e ensinamentos no Instagram e busca a constante evolução em suas técnicas e conhecimentos, para assim,
                  poder desenvolver seus
                  conteúdos
                </div>
              </div>
            </div>
            <div class="max-sm:max-w-xs mx-auto max-w-7xl aspect-[400/685] relative rounded-md">
              <nuxt-img src="/assets/images/whois.png" class="min-w-full min-h-full" alt="" />
            </div>
          </div>
        </div>
        <div class="text-center">
          <nuxt-link :href="useRuntimeConfig().public.compra">
            <button class="max-sm:text-xs min-md:text-md golden-bg px-4 py-2 font-bold rounded-full" type="submit">
              Quero Garantir Minha Vaga Agora!
            </button>
          </nuxt-link>
        </div>
        <div class="text-center">
          <Icon class="text-yellow-500 my-6 float" size="40" name="mdi:chevron-down" />
        </div>
        <div class="max-w-3xl max-md:px-6 mx-auto text-light text-xl text-center text-white">
          Ou entre em contato para tirar suas <br class="max-md:hidden"> dúvidas <span class="text-[#efbe50] font-bold">agora mesmo.</span>
        </div>
        <div class="text-center">
          <nuxt-link :href="useRuntimeConfig().public.whatsapp">
            <button class="max-sm:text-xs min-md:text-md golden-bg px-4 py-2 font-bold rounded-full" type="submit">
              WhatsApp Luis Vaz
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto max-sm:px-6 grid gap-8 py-6">
        <div class="max-w-md text-center mx-auto text-stone-400 grid gap-6">
          <social-v2 />
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-5xl mx-auto text-center py-12 text-stone-400">
        Todos os direitos reservados © — VazTraders
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import 'animate.css';
import { useIntersectionObserver } from '@vueuse/core'

const targetone = ref(null)
const targettwo = ref(null)
const firstDolarVisible = ref(false)
const secondDolarVisible = ref(false)

useIntersectionObserver(
  targetone,
  ([{ isIntersecting }]) => {
    firstDolarVisible.value = isIntersecting
  }
)

useIntersectionObserver(
  targettwo,
  ([{ isIntersecting }]) => {
    secondDolarVisible.value = isIntersecting
  }
)
</script>