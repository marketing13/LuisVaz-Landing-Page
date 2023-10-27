<template>
  <div class="relative">
    <nuxt-img src="/assets/images/xp/bg.jpg" class="absolute w-full h-full" fit="cover" />
    <div class="max-w-6xl mx-auto relative grid gap-12 py-24 px-3">
      <div class="text-center uppercase text-black font-black text-4xl">
        The Vaz Experience <br>
        é para você que deseja:
      </div>
      <div>
        <div class="max-w-4xl mx-auto gap-2 grid">
          <div v-for="(item, i) in useXpData().desire" :key="i+'desire'" class="grid grid-flow-col justify-start gap-3 items-center p-2 bg-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="rotate-90 text-amber-200 aspect-square" width="16" height="16" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path fill="currentColor"
                  d="M10.7 3.148a1.5 1.5 0 0 1 2.599 0l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954Z" />
              </g>
            </svg>
            <div>{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div class="grid justify-center">
        <div>
          <button @click="useBuyExperience()" class="text-center uppercase text-white bg-black p-3 px-6 rounded-lg font-black text-2xl">THE VAZ EXPERIENCE É PARA MIM</button>
        </div>
      </div>
    </div>
  </div>
</template>