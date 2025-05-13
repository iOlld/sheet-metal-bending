import { baseConstants } from '@/api/_utils/constants.js'

export const products = {
  ...baseConstants,
  stripe: { value: 'STRIPE', label: 'Полоса', price: 3 },
  plank: { value: 'PLANK', label: 'Планка', price: 3.57 },
  gardenBed: { value: 'GARDEN_BED', label: 'Грядка', price: 7.05 },
}

export const bendingTables = {
  ...baseConstants,
  1: { value: 1, label: 'Перший стіл' },
  2: { value: 2, label: 'Другий стіл' },
}