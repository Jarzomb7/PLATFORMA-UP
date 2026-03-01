'use client'

const steps = [
  {
    num: '01',
    title: 'Opisz czego szukasz',
    desc: 'Napisz naturalne zdanie opisujące Twoje wymarzone mieszkanie. Nasza AI rozumie język naturalny i wyciąga kluczowe parametry.',
    example: '"Chcę 3-pokojowe na Mokotowie, blisko metra, do 3 500 PLN/mies, z balkonem"',
  },
  {
    num: '02',
    title: 'AI analizuje oferty',
    desc: 'W ciągu sekund przeszukujemy ponad 2 miliony ofert z dziesiątek portali, rankingujemy je wg Twoich preferencji.',
    example: 'Analizujemy 2.4M ofert z 15+ portali jednocześnie',
  },
  {
    num: '03',
    title: 'Otrzymujesz dopasowane wyniki',
    desc: 'Widzisz tylko oferty, które naprawdę pasują. Z oceną AI, analizą ceny i informacjami o okolicy.',
    example: 'Średnio 12 dopasowanych ofert vs 400+ bez filtrowania',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
            <span className="text-xs text-neon font-medium tracking-widest uppercase">Jak to działa</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-800 leading-tight" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
            Proste jak rozmowa
            <br />
            <span className="gradient-text">z przyjacielem</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-brand-600/0 via-brand-600/40 to-brand-600/0" />

          <div className="flex flex-col gap-20">
            {steps.map((step, i) => (
              <div key={step.num} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card rounded-3xl p-8 hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-1 group">
                    <div className="text-5xl font-display font-800 gradient-text-blue mb-4 opacity-30" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-display font-700 mb-4" style={{fontFamily: 'Syne, sans-serif', fontWeight: 700}}>
                      {step.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <div className="bg-brand-900/40 border border-brand-700/30 rounded-xl p-4">
                      <p className="text-brand-300 text-sm italic">{step.example}</p>
                    </div>
                  </div>
                </div>

                {/* Step number circle */}
                <div className="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-600 to-neon items-center justify-center flex-shrink-0 glow-blue">
                  <span className="text-white font-display font-800 text-lg" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
                    {parseInt(step.num)}
                  </span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
