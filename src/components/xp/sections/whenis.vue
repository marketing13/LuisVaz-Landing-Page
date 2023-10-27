<template>
    <div class="max-w-6xl mx-auto relative">
        <div class="relative max-w-5xl mx-auto grid lg:grid-cols-2 gap-3 py-24 pt-12 px-6">
            <div class="grid gap-3">
                <div class="font-bold text-6xl">
                    DETALHES DO <span class="bg-clip-xp">EVENTO</span>
                </div>
                <div>
                    <div class="grid gap-3 max-w-xs">
                        <div>
                            <button @click="useBuyExperience()" class="golden-bg-xp text-black px-4 py-2 font-black rounded-2xl text-lg text-center">
                                GARANTA JÁ SUA VAGA
                            </button>
                        </div>
                        <div class="text-center">
                            Vagas Limitadas - Compra 100% segura
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class="grid justify-start gap-6">
                        <div class="max-w-xs">
                            <div class="flex gap-2">
                                <div class="grid grid-flow-col justify-start items-center max-h-6">
                                    <nuxt-img fit="cover" :width="14" src="/assets/images/xp/calendário.png" />
                                </div>
                                <span>
                                    DATA: 16 e 17 de Dezembro
                                </span>
                            </div>
                        </div>
                        <div class="max-w-xs">
                            <div class="flex gap-2">
                                <div class="grid grid-flow-col justify-start items-center max-h-6">
                                    <nuxt-img fit="cover" :width="14" src="/assets/images/xp/relogio.png" />
                                </div>
                                <span>
                                    HORÁRIO: 9:00 da manhã até 23:00 da noite
                                </span>
                            </div>
                        </div>
                        <div class="max-w-xs">
                            <div class="grid grid-flow-col justify-start gap-2">
                                <div>
                                    <div class="grid items-center max-h-6">
                                        <nuxt-img fit="cover" :width="14" src="/assets/images/xp/agulha.png" />
                                    </div>
                                </div>
                                <span>
                                    Centro de Convenções e Eventos GPM
                                    Avenida Copacabana 190, Lazulli Corporate Offices,
                                    3º andar - Empresarial 18 do Forte, Sala 303
                                    Alphaville - Barueri - SP
                                    CEP: 06472-001
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>