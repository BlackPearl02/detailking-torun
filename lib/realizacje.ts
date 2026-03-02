/**
 * Realizacje – zdjęcia z oryginalnej strony DetailKing Toruń
 * Źródło: https://detailingtorun.com.pl/realizacje/
 */

export interface Realizacja {
  title: string
  description?: string
  thumbnail: string
}

const IMG = 'https://detailingtorun.com.pl/wp-content/uploads'

export const realizacje = [
  { title: 'Citroen C3 Aircross', description: 'Powłoka CarbonQ 10H, zabezpieczenie felg i lamp, kokpit i tapicerka.', thumbnail: `${IMG}/2019/02/citroen1.jpg` },
  { title: 'VW Passat', description: 'Ceramika Gyeon Q2 Durabed, felgi i lampy, wycieraczka niewidzialna, podłoga i skóra.', thumbnail: `${IMG}/2021/03/20210226_193938-scaled.jpg` },
  { title: 'Audi RS4', description: 'Pełen pakiet zabezpieczeń ceramicznych.', thumbnail: `${IMG}/2020/03/auto-detailing-realizacje-audi-rs4-1.jpg` },
  { title: 'Golf VII', description: 'Mycie detailingowe, glinkowanie, korekta, ceramika Gyeon Q2 Dura Bed, reflektory i felgi.', thumbnail: `${IMG}/2021/03/20210226_193932-scaled.jpg` },
  { title: 'Toyota RAV4', description: 'Full pakiet ceramiczny.', thumbnail: `${IMG}/2021/03/20210226_193726-scaled.jpg` },
  { title: 'Motocykl', description: 'Detailing i zabezpieczenie dwóch kółek.', thumbnail: `${IMG}/2021/03/20210224_134554-scaled.jpg` },
]

export const REALIZACJE_ORIGINAL_URL = 'https://detailingtorun.com.pl/realizacje/'
