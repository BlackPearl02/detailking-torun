/**
 * Realizacje na podstawie audytu detailingtorun.com.pl
 * Źródło: https://detailingtorun.com.pl/realizacje/
 */

export interface Realizacja {
  title: string
  thumbnail: string
  alt?: string
}

const UNSPLASH_CAR = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800'
const UNSPLASH_DETAIL = 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800'
const UNSPLASH_MOTO = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800'

export const realizacje = [
  { title: 'CITROEN C3 Aircross', thumbnail: UNSPLASH_CAR },
  { title: 'Motocykl dla prawdziwego faceta', thumbnail: UNSPLASH_MOTO },
  { title: 'VW Passat', thumbnail: UNSPLASH_DETAIL },
]
