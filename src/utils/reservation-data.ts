import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório'}),
  persons: z.number().min(1, { message: 'Quantidade de pessoas é obrigatório'}),
  date: z.string().min(1, {message: 'Data é obrigatória'}),
  time: z.string().min(1, {message: 'Horário é obrigatório'})
});

export const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
]