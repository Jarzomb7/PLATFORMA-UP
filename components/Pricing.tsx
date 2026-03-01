'use client'

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'zawsze',
    desc: 'Idealne do pierwszych poszukiwań',
    features: [
      '10 wyszukiwań AI / dzień',
      'Podstawowe filtry',
      'Powiadomienia email',
      '1 zapisane wyszukiwanie',
    ],
    cta: 'Zacznij za darmo',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '49',
    period: 'mies.',
    desc: 'Dla aktywnych poszukujących',
    features: [
      'Nieograniczone wyszukiwania AI',
      'Analiza cen i trendy rynkowe',
      'Alerty w czasie rzeczywistym',
      '20 zapisanych wyszukiwań',
      'Mapa z nakładkami',
      'Porównywarka ofert',
      'Priorytetowe wsparcie',
    ],
    cta: 'Zacznij 14 dni gratis',
    highlight: true,
  },
  {
    name: 'Business',
    price: '199',
    period: 'mies.',
    desc: 'Dla agencji i deweloperów',
    features: [
      'Wszystko z Pro',
      'API dostęp',
      'Raporty rynkowe PDF',
      'Biała etykieta',
      'Nieograniczeni użytkownicy',
      'Dedykowany opiekun',
      'SLA 99.9%',
    ],
    cta: 'Skontaktuj się',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="cennik" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
            <span className="text-xs text-brand-400 font-medium tracking-widest uppercase">Cennik</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-800 mb-6" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
            Prosty i przejrzysty
            <br />
            <span className="gradient-text">cennik</span>
          </h2>
          <p className="text-white/50 text-lg">
            Bez ukrytych opłat. Anuluj kiedy chcesz.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-brand-700/40 to-brand-900/60 border border-brand-500/50 glow-blue' 
                  : 'glass-card hover:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-neon text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                  Najpopularniejszy
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-display font-700 text-white/80 mb-2" style={{fontFamily: 'Syne, sans-serif', fontWeight: 700}}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-display font-800 text-white" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
                    {plan.price === '0' ? 'Darmowy' : `${plan.price} PLN`}
                  </span>
                  {plan.price !== '0' && (
                    <span className="text-white/40 mb-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-white/40 text-sm">{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-white/60">
                    <svg className="w-5 h-5 text-neon flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-brand-600 to-neon text-white hover:opacity-90 glow-blue'
                    : 'glass-card text-white/70 hover:text-white hover:border-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
