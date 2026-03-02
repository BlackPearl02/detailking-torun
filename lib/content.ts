export const site = {
  name: 'DetailKing Toruń',
  tagline: 'Detailing Toruń. Zapraszamy do naszego studia detailingu.',
  phone: '666 677 727',
  phoneLabel: 'Darek',
  email: 'detailking.torun@wp.pl',
  address: 'Pawła Kałamarskiego 8/10, 87-100 Toruń',
}

export const hero = {
  headline: 'Zadbane auto to Twój wizerunek',
  subheadline: 'Profesjonalny auto detailing w Toruniu. Powłoki kwarcowe i ceramiczne, Smart Repair, PDR, oklejanie foliami. Pracujemy na produktach Gyeon, 4 nano, CarbonQ, Rupes.',
  ctaPrimary: 'Umów wycenę',
  ctaSecondary: 'Zadzwoń',
}

export const services = [
  {
    title: 'Auto detailing',
    description: 'Dwa pakiety: Standard oraz Premium. Mycie, dekontaminacja, korekta lakieru, zabezpieczenie, wnętrze. Odświeżenie wyglądu i trwała ochrona.',
  },
  {
    title: 'Smart Repair',
    description: 'Innowacyjna metoda szybkich i efektywnych napraw. Usuwanie drobnych uszkodzeń powstałych w trakcie eksploatacji pojazdu.',
  },
  {
    title: 'Przyciemnianie szyb',
    description: 'Ochrona mienia, przed UV, szkło bezpieczne. Wykorzystujemy najlepszej jakości folie.',
  },
  {
    title: 'Przygotowanie do sprzedaży',
    description: 'Szybkie odświeżenie wyglądu pojazdu, ułatwiające późniejszą sprzedaż.',
  },
  {
    title: 'SSR – usuwanie rys i zadrapań',
    description: 'Opatentowany odpowiednik lakieru. Trwałe rozwiązanie małych i średnich zadrapań, rys, odprysków – alternatywa dla tradycyjnego lakierowania.',
  },
  {
    title: 'Renowacja skórzanych tapicerek',
    description: 'Kompleksowa naprawa zniszczonych tapicerek skórzanych i zabezpieczenie najlepszymi środkami.',
  },
  {
    title: 'Usuwanie wgnieceń – PDR',
    description: 'Bezinwazyjna metoda PDR: gradobicie, wandalizm, uderzenia, szkody parkingowe i komunikacyjne.',
  },
  {
    title: 'Oklejanie foliami ochronnymi',
    description: 'Kompleksowe zabezpieczenie lakieru przed kamieniami, zarysowaniami, otarciami. Folia PPF – najlepsza ochrona na rynku.',
  },
  {
    title: 'Powłoki ceramiczne i kwarcowe',
    description: 'Najtrwalsza forma zabezpieczenia lakieru. Zalecane dla aut nowych i używanych w bardzo dobrym stanie.',
  },
]

/** Grupowanie oferty w sekcje – do ładniejszego layoutu */
export type ServiceItem = { title: string; description: string }
export type ServiceSection = { title: string; items: ServiceItem[] }

export const serviceSections: ServiceSection[] = [
  {
    title: 'Detailing i zabezpieczenie lakieru',
    items: [
      { title: 'Auto detailing', description: 'Pakiety Standard i Premium: mycie, dekontaminacja, korekta lakieru, zabezpieczenie, wnętrze. Odświeżenie wyglądu i trwała ochrona.' },
      { title: 'Powłoki ceramiczne i kwarcowe', description: 'Najtrwalsza forma zabezpieczenia lakieru. Zalecane dla aut nowych i używanych w bardzo dobrym stanie.' },
      { title: 'Przygotowanie do sprzedaży', description: 'Szybkie odświeżenie wyglądu pojazdu przed sprzedażą – u nas przygotujesz auto do handlu.' },
    ],
  },
  {
    title: 'Naprawy karoserii',
    items: [
      { title: 'Smart Repair', description: 'Szybkie i efektywne naprawy drobnych uszkodzeń z eksploatacji – bez zbędnego lakierowania.' },
      { title: 'SSR – usuwanie rys i zadrapań', description: 'Opatentowany odpowiednik lakieru. Trwałe usuwanie małych i średnich zadrapań, rys i odprysków.' },
      { title: 'Usuwanie wgnieceń – PDR', description: 'Bezinwazyjna metoda: gradobicie, wandalizm, uderzenia, szkody parkingowe i komunikacyjne.' },
    ],
  },
  {
    title: 'Wnętrze i szkło',
    items: [
      { title: 'Renowacja skórzanych tapicerek', description: 'Kompleksowa naprawa zniszczonych tapicerek skórzanych i zabezpieczenie najlepszymi środkami.' },
      { title: 'Przyciemnianie szyb', description: 'Ochrona mienia, przed UV, szkło bezpieczne. Stosujemy folie najwyższej jakości.' },
    ],
  },
  {
    title: 'Oklejanie i ochrona',
    items: [
      { title: 'Oklejanie foliami ochronnymi PPF', description: 'Kompleksowa ochrona lakieru przed kamieniami, zarysowaniami i otarciami. Folia PPF – najlepsza ochrona na rynku.' },
    ],
  },
]

export const pricingIntro = 'Ceny zależą od rodzaju pojazdu. Poniżej cennik w podziale na osobowe małe/średnie, duże (SUV/VAN) oraz BUS.'

/** Wiersz cennika: small = osobowe małe/średnie, van = duże SUV/VAN, bus = BUS. Gdy tylko onePrice – jedna cena dla wszystkich. */
export type PricingRow = {
  name: string
  onePrice?: string
  small?: string
  van?: string
  bus?: string
  note?: string
}

export type PricingSection = { title: string; items: PricingRow[] }

export const pricingSections: PricingSection[] = [
  {
    title: 'Mycie i konserwacja',
    items: [
      { name: 'Mycie detailingowe Premium', onePrice: 'od 300 zł' },
      { name: 'Konserwacja powłoki ceramicznej', onePrice: 'od 400 zł' },
      { name: 'Ozonowanie wnętrza pojazdu', onePrice: 'od 60 zł' },
      { name: 'Niewidzialna wycieraczka – przednia szyba', onePrice: '70 zł' },
      { name: 'Niewidzialna wycieraczka – wszystkie szyby', small: '200 zł', van: '200 zł', bus: 'od 250 zł' },
    ],
  },
  {
    title: 'Korekta i zabezpieczenie lakieru',
    items: [
      { name: 'Korekta lakieru jednoetapowa (Standard)', small: '600 zł', van: '700 zł', bus: '800 zł' },
      { name: 'Korekta lakieru wieloetapowa (Premium)', small: '1500 zł', van: '1700 zł', bus: '2000 zł' },
      { name: 'Zabezpieczenie lakieru woskiem (naturalny/syntetyczny)', small: '500 zł', van: '600 zł', bus: 'od 700 zł' },
      { name: 'Powłoka Gyeon – ochrona 1 rok / 2 lata', small: '800 / 1000 zł', van: '900 / 1100 zł', bus: '1000 / 1200 zł', note: '* konserwacja po roku' },
      { name: 'Powłoka ceramiczna Gyeon – ochrona 3 lata', small: '1400 zł', van: '1500 zł', bus: 'od 1600 zł', note: '* konserwacja po roku' },
      { name: 'Powłoka ceramiczna Gyeon – ochrona 5 lat (certyfikowana)', small: '2000 zł', van: '2100 zł', bus: 'od 2500 zł', note: '* konserwacja po roku' },
    ],
  },
  {
    title: 'Felgi i lampy',
    items: [
      { name: 'Zabezpieczenie frontów felg powłoką ceramiczną', onePrice: 'od 200 zł' },
      { name: 'Zabezpieczenie całych felg powłoką ceramiczną', onePrice: 'od 500 zł' },
      { name: 'Zabezpieczenie lamp powłoką ceramiczną', onePrice: 'od 200 zł' },
    ],
  },
  {
    title: 'Wnętrze',
    items: [
      { name: 'Pranie tapicerki', onePrice: 'od 350 zł' },
      { name: 'Czyszczenie i odżywienie tapicerki skórzanej', onePrice: 'od 350 zł' },
      { name: 'Zabezpieczenie powłoką skórzanej tapicerki', onePrice: '150 zł' },
      { name: 'Czyszczenie i impregnacja dachu cabrio', onePrice: 'od 400 zł' },
    ],
  },
  {
    title: 'Reflektory i pozostałe',
    items: [
      { name: 'Renowacja reflektorów z powłoką ceramiczną', onePrice: 'od 250 zł' },
      { name: 'Przyciemnianie szyb', onePrice: 'od 600 zł' },
      { name: 'Wyciąganie wgnieceń metodą PDR', onePrice: 'od 200 zł', note: 'wycena indywidualna' },
      { name: 'Rozklejanie pojazdu', onePrice: 'wycena indywidualna' },
      { name: 'Przygotowanie pojazdu do sprzedaży', onePrice: 'wycena indywidualna' },
    ],
  },
  {
    title: 'Oklejanie folią PPF i wygłuszanie',
    items: [
      { name: 'Oklejanie przodu folią PPF (maska, zderzak, lampy, błotniki, słupki A, lusterka, nadszybie, pod klamkami, próg)', onePrice: 'od 5500 zł', note: 'elementy: lampy od 400 zł kpl, pod klamkami 200 zł, próg 300 zł, lusterka 400 zł' },
      { name: 'Oklejanie całego pojazdu folią PPF', onePrice: 'od 12 500 zł' },
      { name: 'Zmiana koloru pojazdu (folia)', onePrice: 'od 6500 zł' },
      { name: 'Wygłuszanie matami butylowymi', onePrice: 'od 200 zł', note: 'drzwi/maska od 250 zł, klapa od 200 zł, bagażnik od 450 zł, nadkola 450 zł/parę, dach od 750 zł, podłoga od 800 zł, półka od 300 zł, cały osobowy/SUV od 5000 zł' },
    ],
  },
]

export const about = {
  title: 'Motoryzacja to nasza pasja',
  body: 'DetailKing to marka na polskim rynku od 2008 roku, część międzynarodowego projektu DetailKing Group. Zaspokajamy rosnące wymagania sektora motoryzacyjnego. Usługi wykonujemy z dbałością o każdy szczegół – każdy klient zostawiający pojazd w naszym studio może być pewien, że trafia w ręce fachowców z doświadczeniem. Pracujemy na produktach i urządzeniach marek: Gyeon, 4 nano, CarbonQ, Rupes, Flexishield, 3M.',
}

export const processSteps = [
  { step: 1, title: 'Kontakt', text: 'Zadzwoń lub napisz. Ustalamy termin i zakres prac.' },
  { step: 2, title: 'Wycena', text: 'Dobieramy najlepszy pakiet do pojazdu i oczekiwań klienta.' },
  { step: 3, title: 'Realizacja', text: 'Wykonujemy usługę w naszym studio przy Pawła Kałamarskiego w Toruniu.' },
  { step: 4, title: 'Odbiór', text: 'Odbierasz auto w nieskazitelnym stanie, z gwarancją jakości.' },
]

export const testimonials = [
  { text: 'Jestem bardzo zadowolony! Był wgniot, nie ma po nim śladu! Bardzo dobra robota! POLECAM', author: 'Marcin F.' },
  { text: 'Najlepsze studio Detailingowe w Toruniu! Do tego zarządzane przez super ludzi. Polecam!', author: 'Konrad L.' },
  { text: 'Drugiego takiego serwisu nie znajdziecie. Moja A3 po myciu i konserwacji lakieru prezentuje się przecudownie. Mega podejście do klienta, wszystko na najwyższym poziomie.', author: 'Grażyna G.' },
  { text: 'Pełen profesjonalizm, auto wyjeżdża jak z salonu, środki na najwyższym poziomie, doskonali fachowcy. Polecam', author: 'Katarzyna R.' },
  { text: 'Po dzisiejszej wizycie moja Toyota jak z salonu. Super robota. Polecam.', author: 'Sławomir M.' },
  { text: 'Auto oddane na pranie tapicerki. Usługa wykonana sprawnie i fachowo. Do tego super atmosfera. Polecam!', author: 'Paweł K.' },
  { text: 'Świetna robota przy nakładaniu powłoki. 100% profesjonalizmu!', author: 'Patryk W.' },
  { text: 'Polerowane lampy w Toyocie Yaris – rewelacja, jak nowe. W warsztacie sterylna czystość. Obsługa przesympatyczna. Gorąco polecam!', author: 'Piotr R.' },
]

export const contact = {
  title: 'Kontakt',
  subtitle: 'Zapraszamy do studia przy Pawła Kałamarskiego 8/10 w Toruniu. Zadzwoń lub napisz.',
  formName: 'Imię i nazwisko',
  formPhone: 'Telefon',
  formEmail: 'Email',
  formMessage: 'Wiadomość',
  formSubmit: 'Wyślij wiadomość',
}
