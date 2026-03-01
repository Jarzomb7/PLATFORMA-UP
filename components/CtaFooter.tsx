'use client'

export function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-16 text-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-800/60 via-brand-900/80 to-dark-800" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-neon/10 rounded-full blur-[60px]" />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-brand-500/30" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-800 mb-6" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
              Zacznij znajdować
              <br />
              <span className="gradient-text">swój dom dziś</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Dołącz do 50 000+ użytkowników, którzy znaleźli wymarzone mieszkanie z Propstu.
              Pierwsze 14 dni Pro za darmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-neon text-white font-semibold text-lg hover:opacity-90 transition-opacity glow-blue">
                Zacznij za darmo
              </a>
              <a href="#" className="px-10 py-4 rounded-2xl glass-card text-white/70 hover:text-white font-medium text-lg transition-all">
                Porozmawiaj z nami
              </a>
            </div>
            <p className="mt-6 text-white/30 text-sm">Brak karty kredytowej. Anuluj kiedy chcesz.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const links = {
    'Produkt': ['Funkcje', 'Cennik', 'Changelog', 'API'],
    'Firma': ['O nas', 'Blog', 'Prasa', 'Kariera'],
    'Wsparcie': ['Pomoc', 'Dokumentacja', 'Status', 'Kontakt'],
    'Prawne': ['Prywatność', 'Regulamin', 'Cookies'],
  }

  return (
    <footer className="border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-neon flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L2 7V16H7V11H11V16H16V7L9 2Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="font-display text-xl font-700" style={{fontFamily: 'Syne, sans-serif', fontWeight: 700}}>
                Prop<span className="text-brand-400">stu</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              AI-powered platforma do wyszukiwania i analizy nieruchomości.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">{group}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/30 hover:text-white/70 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">© 2024 Propstu. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
              <a key={s} href="#" className="text-white/20 hover:text-white/60 text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
