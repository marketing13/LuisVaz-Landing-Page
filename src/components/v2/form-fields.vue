<template>
  <div class="grid gap-3">
    <label class="grid">
      <span class="mb-1"><span v-if="nomeError && isTouched" class="bg-red-500 px-1 rounded-md">{{
        nomeError }}</span></span>
      <input v-model="state.nome" placeholder="Nome" type="text" class="text-black rounded-sm p-3">
    </label>
    <label class="grid">
      <span class="mb-1"><span v-if="emailError && isTouched" class="bg-red-500 px-1 rounded-md">{{
        emailError }}</span></span>
      <input v-model="state.email" placeholder="Email" type="text" class="text-black rounded-sm p-3">
    </label>
    <label class="grid">
      <span class="mb-1"><span v-if="celularError && isTouched"
          class="bg-red-500 px-1 rounded-md">{{ celularError }}</span></span>
      <input v-maska data-maska="['(##) ####-####', '(##) # ####-####']" placeholder="Whatsapp" v-model="state.celular" type="text"
        class="text-black rounded-sm p-3">
    </label>
    <div class="flex items-center gap-3">
      <Icon name="V2Calendar" />
      <span>
        Dia 28 de outubro até dia 1° de novembro
      </span>
    </div>
    <div>
      <span class="text-white text-md font-normal">Faça o seu
        cadastro</span>
      <span class="text-white text-md font-bold"> AGORA MESMO!</span>
    </div>
    <div>
      <div class="grid gap-3 max-w-md">
        <div class="grid">
          <button @click.prevent="trigger" class="golden-bg-xp px-4 py-3 font-black rounded-2xl text-lg text-center text-black">
            QUERO DOMINAR O TRADING
          </button>
        </div>
        <div>
          *Seus dados estão protegidos. Respeitamos a sua privacidade.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch'
import { ZodError } from 'zod'
import { useToast } from 'vue-toastification'

const route = useRoute();
const router = useRouter();
const schema = FormSchema();

const default_value = { email: '', nome: '', celular: '' }

const state = ref({ ...default_value })
const isTouched = ref(false)

const result = computed(() => schema.safeParse(state.value));
const errors = computed(() => result.value.success ? {} : result.value.error.format());

const getErrors = (field: string) => {
  //@ts-ignore
  return errors.value?.[field]?._errors?.at(0)
}

const nomeError = computed(() => getErrors('nome'))
const emailError = computed(() => getErrors('email'))
const celularError = computed(() => getErrors('celular'))

const trigger = async () => {
  isTouched.value = true;
  try {
    schema.parse(state.value)

    await $fetch('/api/v1/send', { body: { ...state.value, action: route.name }, method: 'POST' })
    const toast = useToast();
    toast.success('Obrigado por inscrever-se')
    state.value = { ...default_value };
    isTouched.value = false;
    router.push({ path: 'obrigado' })
  } catch (e) {
    if (e instanceof ZodError) {
      console.error('Invalid Form Data')
      const toast = useToast();
      toast.error('Dados inválidos')
    };
    if (e instanceof FetchError) {
      console.error('Server Error')
      const toast = useToast();
      toast.error('Ocorreu um erro ao enviar dados')
    };
  }
}
</script>