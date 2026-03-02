/**
 * Realizacje – przykładowe prace ze studia DetailKing Toruń
 * Źródło: https://detailingtorun.com.pl/realizacje/
 */

export interface Realizacja {
  title: string
  description?: string
  thumbnail: string
}

const PLACEHOLDER_BASE = 'https://images.unsplash.com'

export const realizacje = [
  { title: 'Citroen C3 Aircross', description: 'Powłoka CarbonQ 10H, zabezpieczenie felg i lamp, kokpit i tapicerka.', thumbnail: `${PLACEHOLDER_BASE}/photo-1549317661-bd32c8ce0db2?w=800&q=80` },
  { title: 'VW Passat', description: 'Ceramika Gyeon Q2 Durabed, felgi i lampy, wycieraczka niewidzialna, podłoga i skóra.', thumbnail: `${PLACEHOLDER_BASE}/photo-1619767886558-efdc259cde1a?w=800&q=80` },
  { title: 'Audi RS4', description: 'Pełen pakiet zabezpieczeń ceramicznych.', thumbnail: `${PLACEHOLDER_BASE}/photo-1609521263047-f8f205293f24?w=800&q=80` },
  { title: 'Golf VII', description: 'Mycie detailingowe, glinkowanie, korekta, ceramika Gyeon Q2 Dura Bed, reflektory i felgi.', thumbnail: `${PLACEHOLDER_BASE}/photo-1552519507-da3b142c6e3d?w=800&q=80` },
  { title: 'Toyota RAV4', description: 'Full pakiet ceramiczny.', thumbnail: `${PLACEHOLDER_BASE}/photo-1621007947382-bb3c3994e3fb?w=800&q=80` },
  { title: 'Motocykl', description: 'Detailing i zabezpieczenie dwóch kółek.', thumbnail: `${PLACEHOLDER_BASE}/photo-1558981806-ec527fa84c39?w=800&q=80` },
]

export const REALIZACJE_ORIGINAL_URL = 'https://detailingtorun.com.pl/realizacje/'
