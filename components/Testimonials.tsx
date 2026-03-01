'use client'

const testimonials = [
  {
    name: 'Marta Kowalska',
    role: 'Kupująca, Warszawa',
    text: 'Propstu znalazło mi idealne mieszkanie w 3 dni. Wcześniej szukałam sama przez 4 miesiące bez efektu. AI naprawdę rozumie czego szukasz.',
    avatar: 'MK',
  },
  {
    name: 'Tomasz Nowak',
    role: 'Inwestor, Kraków',
    text: 'Analiza cen rynkowych jest niesamowita. Wiem dokładnie czy oferta jest dobra, zanim zadzwonię do agenta. Zaoszczędziłem już 40k zł.',
    avatar: 'TN',
  },
  {
    name: 'Aleksandra Wiśniewska',
    role: 'Wynajmująca, Wrocław',
    text: 'Alerty działają błyskawicznie. Byłam pierwsza przy 3 ofertach, które mnie interesowały. Polecam każdemu, kto szuka w konkurencyjnych miastach.',
    avatar: 'AW',
  },
  {
    name: 'Michał Jabłoński',
    role: 'Deweloper, Gdańsk',
    text: 'Integracja API jest czysta i dokumentacja świetna. Wbudowaliśmy Propstu w naszą platformę w tydzień. Klienci są zachwyceni.',
    avatar: 'MJ',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
            <span className="text-xs text-neon font-medium tracking-widest uppercase">Opinie użytkowników</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-800" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
            Co mówią nasi
            <br />
            <span className="gradient-text">użytkownicy</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-card rounded-3xl p-8 hover:border-brand-500/20 transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-8 text-lg italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-600 to-neon flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-white/40 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
