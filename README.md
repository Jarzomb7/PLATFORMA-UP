# 🏠 Propstu — AI-Powered Real Estate Platform

Nowoczesna platforma nieruchomości z AI zbudowana w Next.js 14, Tailwind CSS i TypeScript.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: CSS Animations + Framer Motion ready
- **Deployment**: Vercel

---

## 📦 Instalacja lokalna

```bash
# 1. Sklonuj repo
git clone https://github.com/TWOJ_USERNAME/propstu.git
cd propstu

# 2. Zainstaluj zależności
npm install

# 3. Uruchom dev server
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy na Vercel

### Metoda 1: Przez dashboard (NAJŁATWIEJSZA)

1. Wejdź na [vercel.com](https://vercel.com) i zaloguj się
2. Kliknij **"Add New Project"**
3. Wybierz **"Import Git Repository"** → wybierz to repo
4. Kliknij **"Deploy"** — Vercel wykryje Next.js automatycznie
5. Gotowe! 🎉

### Metoda 2: Przez Vercel CLI

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy produkcyjny
vercel --prod
```

### Metoda 3: GitHub Actions (automatyczny CI/CD)

1. Zainstaluj Vercel CLI i uzyskaj tokeny:
```bash
vercel login
vercel link  # linkuje projekt, zapisuje VERCEL_ORG_ID i VERCEL_PROJECT_ID
```

2. Dodaj sekrety do GitHub repo (`Settings → Secrets → Actions`):
   - `VERCEL_TOKEN` — z [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` — z `.vercel/project.json` po `vercel link`
   - `VERCEL_PROJECT_ID` — z `.vercel/project.json` po `vercel link`

3. Każdy push na `main` automatycznie deployuje na produkcję!

---

## 📁 Struktura projektu

```
propstu/
├── app/
│   ├── globals.css        # Style globalne
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Strona główna
├── components/
│   ├── Navbar.tsx         # Nawigacja
│   ├── Hero.tsx           # Sekcja hero z particles
│   ├── Features.tsx       # Funkcje platformy
│   ├── HowItWorks.tsx     # Jak to działa
│   ├── Testimonials.tsx   # Opinie użytkowników
│   ├── Pricing.tsx        # Cennik
│   └── CtaFooter.tsx      # CTA + Footer
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## 🎨 Sekcje strony

- **Navbar** — sticky, glass effect przy scrollu, mobile hamburger
- **Hero** — animated particles canvas, search bar, stats
- **Features** — 6 kart z hover effects i glow
- **How It Works** — 3-step timeline
- **Testimonials** — 4 opinie użytkowników
- **Pricing** — 3 plany (Starter/Pro/Business)
- **CTA** — call to action z gradient background
- **Footer** — linki, social media

---

## 🔧 Dostosowanie

Zmień treści w plikach komponentów. Kolory w `tailwind.config.js`:

```js
colors: {
  brand: { /* odcienie niebieskiego */ },
  neon: '#00f5a0',  // akcent zielony
}
```

---

Made with ❤️ using Claude AI
