import { z } from 'zod';

export const FormSchema = () => z.object({
  nome: z.string().nonempty('Campo obrigatório'),
  email: z.string().email('Campo obrigatório').nonempty('Campo obrigatório'),
  //celular: z.string().nonempty('Campo obrigatório').min(14, 'Número de telefone inválido').max(16, 'Número de telefone inválido'),
})