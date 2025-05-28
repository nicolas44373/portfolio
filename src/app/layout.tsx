import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import ThemeLanguageControls from '@/components/ThemeLanguageControls'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from '@/components/ScrollToTop'
import { SpeedInsights } from "@vercel/speed-insights/next"
import MusicPlayer from '@/components/Layout/MusicPlayer';

const inter = Inter({ subsets: ['latin'] })

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
    title: dict.title,
    description: dict.description,
    keywords: keywords[params.lang],
    icons: {
      icon: '/code.ico',
    },
    // Configuramos los metadatos para ambos temas (claro y oscuro)
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: '#030712' }, // neutral-950
    ],
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
          url: '/og-image.png',
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: 'es' | 'en' }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.className} relative bg-white dark:bg-neutral-950 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Decorative gradients como en el Hero */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/20 to-transparent dark:from-blue-500/10 dark:via-blue-800/5 dark:to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-100/20 to-transparent dark:from-purple-500/10 dark:via-purple-800/5 dark:to-transparent rounded-full blur-3xl" />
          </div>

          {/* Main content */}
          <div className="relative flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
              <ThemeLanguageControls />
              <main className="md:ml-20 px-4 md:px-8 pt-16 md:pt-0 min-h-screen">
                {children}
                <MusicPlayer src="/audio/Hydrogen.mp3" />
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