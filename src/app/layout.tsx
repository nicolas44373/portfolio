import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import ThemeLanguageControls from '@/components/ThemeLanguageControls'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from '@/components/ScrollToTop'
import { SpeedInsights } from "@vercel/speed-insights/next"
import LayoutEffects from '@/components/Layout/LayoutEffects'

// Definimos los metadatos para cada idioma
const dictionaries = {
  es: {
    title: 'Nicolas Alurralde - Desarrollador Full-Stack',
    description: 'Portfolio de Nicolas Alurralde, Técnico Superior en Programación y desarrollador Full-Stack.',
    ogImageAlt: 'Portfolio de Nicolas Alurralde - Desarrollador Full-Stack',
  },
  en: {
    title: 'Nicolas Alurralde - Full-Stack Developer',
    description: 'Portfolio of Nicolas Alurralde, Programming Technician and Full-Stack developer.',
    ogImageAlt: 'Nicolas Alurralde Portfolio - Full-Stack Developer',
  }
}

// Función para generar los metadatos según el idioma
export async function generateMetadata(
  { params }: { params: { lang: 'es' | 'en' } }
): Promise<Metadata> {
  // Obtenemos las traducciones según el idioma
  const dict = dictionaries[params.lang ?? 'es']

  // Define keywords para cada idioma
  const keywords = {
    es: [
      'Nicolas Alurralde',
      'Desarrollador Full-Stack',
      'Técnico Superior en Programación',
      'Desarrollo web',
      'Programador',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Desarrollo Frontend',
      'Desarrollo Backend',
      'Portfolio desarrollador',
      'Desarrollador web Argentina',
    ],
    en: [
      'Nicolas Alurralde',
      'Full-Stack Developer',
      'Programming Technician',
      'Web Development',
      'Software Developer',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Frontend Development',
      'Backend Development',
      'Developer Portfolio',
      'Web Developer Argentina',
    ]
  }

  return {
    metadataBase: new URL('https://portfolio-git-main-nicolasprogram.vercel.app/'),
    title: dict.title,
    description: dict.description,
    keywords: keywords[params.lang],
    icons: {
      icon: '/code.ico',
    },
    openGraph: {
      type: 'website',
      url: 'https://portfolio-git-main-nicolasprogram.vercel.app/',
      title: dict.title,
      description: dict.description,
      siteName: dict.title,
      locale: params.lang,
      alternateLocale: params.lang === 'es' ? 'en' : 'es',
      images: [
        {
          url: '/nicoo.jpg',
          width: 1200,
          height: 630,
          alt: dict.ogImageAlt,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.title,
      description: dict.description,
      images: ['/og-image.png'],
    },
    // Agregamos alternativas de idioma
    alternates: {
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' }, // neutral-950
  ],
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: 'es' | 'en' }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="font-sans relative bg-white dark:bg-neutral-950 transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutEffects />

          {/* Main content */}
          <div className="relative flex min-h-screen overflow-x-hidden max-w-full">
            <Sidebar />
            <div className="flex-1 min-w-0 overflow-x-hidden">
              <ThemeLanguageControls />
              <main className="md:ml-20 px-4 md:px-8 pt-16 md:pt-0 min-h-screen">
                {children}
                <SpeedInsights />
              </main>
            </div>
          </div>
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}