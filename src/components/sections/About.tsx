"use client"
import { User, Code, ShieldCheck, Zap, AppWindow, Cpu } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      key: 'webdev'
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      key: 'design'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      key: 'optimization'
    },
    {
      icon: <AppWindow className="w-6 h-6 text-purple-500" />,
      key: 'desktop'
    }
  ]

  return (
    <section id="about" className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute right-0 top-[20%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-16 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-6">
          <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
              {t('about.title')}
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Cómo aporto valor al crecimiento de tu empresa
            </p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Columna de Texto */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              Desarrollo de software centrado en resultados
            </h3>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
              <p>{t('about.text3')}</p>
            </div>
          </div>

          {/* Columna de Imagen & Foco */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-8 items-center lg:items-end justify-center w-full">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-900 ring-8 ring-blue-500/5">
              <Image
                src="/nicoo.jpg"
                alt="Nicolas Alurralde"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 256px"
              />
            </div>

            {/* Tarjeta de Filosofía de Trabajo */}
            <Card className="w-full max-w-sm border border-neutral-200/50 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-md rounded-2xl overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm text-neutral-800 dark:text-neutral-100 uppercase tracking-wider">
                    Estándares del Servicio
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Arquitectura Escalable & Modular
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    Interfaces Rápidas (Zero Latency UX)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    Bases de Datos Normalizadas & Seguras
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                    Código Limpio (Clean Code & DRY)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rejilla de Características / Pilares */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border border-neutral-200/50 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 hover:bg-neutral-50/80 dark:hover:bg-neutral-800/40 transition-colors shadow-sm rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-neutral-100 dark:bg-neutral-800/70">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-100">
                      {t(`about.features.${feature.key}.title`)}
                    </h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {t(`about.features.${feature.key}.description`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
