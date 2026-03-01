import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Propstu — Inteligentne Nieruchomości',
  description: 'Platforma AI do wyszukiwania, analizy i zarządzania nieruchomościami. Znajdź idealne mieszkanie szybciej niż kiedykolwiek.',
  keywords: 'nieruchomości, AI, mieszkania, domy, wynajem, kupno',
  openGraph: {
    title: 'Propstu — Inteligentne Nieruchomości',
    description: 'Platforma AI do wyszukiwania i analizy nieruchomości',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  )
}
