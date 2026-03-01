'use client'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Asystent',
    desc: 'Opisz wymarzone mieszkanie swoimi słowami. Nasza AI rozumie kontekst i preferencje jak prawdziwy doradca.',
    accent: 'from-brand-600 to-brand-400',
    glow: 'rgba(76,110,245,0.3)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analiza cen rynku',
    desc: 'Sprawdź, czy cena oferty jest uczciwa. Propstu analizuje historię cen i trendy w danej dzielnicy w czasie rzeczywistym.',
    accent: 'from-neon to-brand-400',
    glow: 'rgba(0,245,160,0.3)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Alerty w czasie real',
    desc: 'Bądź pierwszy. Powiadomienia natychmiast gdy pojawi się oferta spełniająca Twoje kryteria. Przed innymi.',
    accent: 'from-purple-500 to-brand-500',
    glow: 'rgba(168,85,247,0.3)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Mapa interaktywna',
    desc: 'Wizualizacja ofert z nakładkami: szkoły, komunikacja, sklepy, hałas. Wszystko w jednym widoku.',
    accent: 'from-orange-500 to-brand-500',
    glow: 'rgba(249,115,22,0.3)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Porównywarka ofert',
    desc: 'Porównaj do 5 ofert side-by-side. AI wskazuje różnice, ukryte koszty i ocenia stosunek ceny do wartości.',
    accent: 'from-cyan-500 to-brand-500',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Weryfikacja ogłoszeń',
    desc: 'Żadnych scamów. Propstu automatycznie sprawdza autentyczność ogłoszeń i ostrzega przed podejrzanymi ofertami.',
    accent: 'from-green-500 to-neon',
    glow: 'rgba(34,197,94,0.3)',
  },
]

export default function Features() {
  return (
    <section id="funkcje" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
            <span className="text-xs text-brand-400 font-medium tracking-widest uppercase">Możliwości platformy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-800 mb-6 leading-tight" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
            Technologia, która
            <br />
            <span className="gradient-text">zmienia rynek</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Połączyliśmy najnowsze modele AI z ogromną bazą danych nieruchomości, 
            aby dać Ci przewagę na rynku.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                style={{background: `radial-gradient(circle at 30% 50%, ${f.glow} 0%, transparent 60%)`}} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-display font-700 mb-3 group-hover:text-white transition-colors" style={{fontFamily: 'Syne, sans-serif', fontWeight: 700}}>
                {f.title}
              </h3>
              <p className="relative text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {f.desc}
              </p>

              {/* Arrow */}
              <div className="relative mt-6 flex items-center gap-2 text-white/30 group-hover:text-brand-400 transition-colors text-sm font-medium">
                <span>Dowiedz się więcej</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
