'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-card py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-neon flex items-center justify-center glow-blue transition-all duration-300 group-hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L2 7V16H7V11H11V16H16V7L9 2Z" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
          <span className="font-display text-xl font-700 tracking-tight" style={{fontFamily: 'Syne, sans-serif', fontWeight: 700}}>
            Prop<span className="text-brand-400">stu</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Funkcje', 'Cennik', 'O nas', 'Blog'].map((item) => (
            <a key={item} href="#" className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium tracking-wide">
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2">
            Zaloguj
          </a>
          <a href="#" className="relative text-sm font-semibold px-5 py-2.5 rounded-xl overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500 transition-all duration-300 group-hover:opacity-90" />
            <span className="relative text-white">Zacznij za darmo</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            ) : (
              <><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {['Funkcje', 'Cennik', 'O nas', 'Blog'].map((item) => (
            <a key={item} href="#" className="text-white/70 hover:text-white py-2 border-b border-white/5 last:border-0">
              {item}
            </a>
          ))}
          <a href="#" className="mt-2 text-center bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 rounded-xl transition-colors">
            Zacznij za darmo
          </a>
        </div>
      )}
    </nav>
  )
}
