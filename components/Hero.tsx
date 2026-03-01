'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { value: '2.4M+', label: 'Ofert nieruchomości' },
  { value: '98%', label: 'Dokładność AI' },
  { value: '3x', label: 'Szybsze wyszukiwanie' },
  { value: '50k+', label: 'Zadowolonych użytkowników' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number, opacity: number}> = []
    
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(76, 110, 245, ${p.opacity})`
        ctx.fill()

        // Connect nearby
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(76, 110, 245, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen grid-pattern flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neon/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span className="text-xs text-white/60 font-medium tracking-widest uppercase">AI-powered platforma nieruchomości</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-800 leading-none tracking-tight mb-6 animate-slide-up" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800, animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards'}}>
          Znajdź idealne
          <br />
          <span className="gradient-text">mieszkanie</span>
          <br />
          z pomocą AI
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed" style={{animationDelay: '0.2s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.2s forwards'}}>
          Propstu analizuje tysiące ofert w sekundy, rozumie Twoje preferencje i pokazuje tylko to, 
          co naprawdę Cię interesuje. Koniec z przeglądaniem setek ogłoszeń.
        </p>

        {/* Search bar mockup */}
        <div className="relative max-w-2xl mx-auto mb-12" style={{animationDelay: '0.3s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.3s forwards'}}>
          <div className="flex items-center glass-card rounded-2xl p-2 gap-2 border border-white/10 hover:border-brand-500/40 transition-colors">
            <div className="flex-1 flex items-center gap-3 px-4">
              <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Opisz wymarzone mieszkanie... (np. 2-pokojowe w Krakowie, blisko centrum)"
                className="w-full bg-transparent text-white/70 placeholder-white/25 text-sm focus:outline-none py-2"
              />
            </div>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap glow-blue">
              Szukaj z AI
            </button>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" style={{animationDelay: '0.4s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.4s forwards'}}>
          <a href="#" className="group relative px-8 py-4 rounded-2xl text-white font-semibold overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-neon opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Zacznij za darmo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a href="#" className="px-8 py-4 rounded-2xl glass-card text-white/70 hover:text-white font-medium transition-all hover:border-white/20 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Zobacz demo
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" style={{animationDelay: '0.5s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.5s forwards'}}>
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 text-center hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-display font-800 gradient-text-blue mb-1" style={{fontFamily: 'Syne, sans-serif', fontWeight: 800}}>
                {stat.value}
              </div>
              <div className="text-xs text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  )
}
