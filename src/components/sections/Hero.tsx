"use client"
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, FileText, Send, Calendar } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation();

  // Esperar a que el componente se monte
  useEffect(() => {
    setMounted(true);
  }, []);

  const getCVPath = () => {
    if (!mounted) return "/alurralde/Alurralde Nicolas cv - ingles.pdf";
    return i18n.language === 'es'
      ? "/alurralde/Alurralde Nicolas cv - español.pdf"
      : "/alurralde/Alurralde Nicolas cv - ingles.pdf";
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://www.linkedin.com/in/nicolas-alurralde-366939255/' },
    { name: 'Github', icon: '/icons/github.svg', darkIcon: "/icons/githubdark.svg", url: 'https://github.com/nicolas44373' },
    { name: 'Gmail', icon: '/icons/gmail.svg', url: 'mailto:nicolasalurralde39@gmail.com' },
    { name: 'Discord', icon: '/icons/discord.svg', url: 'https://discord.com/channels/@me/1125644563206385784' },
  ];

  const getIconSrc = (link: any) => {
    if (!mounted) return link.icon;
    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    return link.darkIcon && currentTheme === 'dark' ? link.darkIcon : link.icon;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden py-12">
      {/* Luces de fondo decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto px-4 z-10 w-full"
      >
        <Card className="border border-neutral-200/50 dark:border-neutral-800/80 shadow-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-14">
            <div className="space-y-8 text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4"
              >
                {/* Avatar flotante */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl ring-4 ring-blue-500/20"
                  >
                    <Image
                      src="/nicoo.jpg"
                      alt="Nicolas Alurralde"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Badge de disponibilidad */}
                <div className="flex flex-col items-center gap-2">
                  <Badge
                    className="text-xs font-semibold px-4 py-1.5 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/20 rounded-full"
                  >
                    <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    {t('hero.badge')}
                  </Badge>
                </div>

                {/* Título Principal */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                  Nicolas{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                    Alurralde
                  </span>
                </h1>

                {/* Rol / Profesión */}
                <p className="text-lg md:text-xl font-medium text-neutral-600 dark:text-neutral-300 tracking-wide">
                  {t('hero.role')}
                </p>
              </motion.div>

              {/* Pitch Comercial */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal"
              >
                {t('hero.text')}
              </motion.p>

              {/* Botones de Acción / Conversión */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4 pt-2"
              >
                <Button
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300 rounded-xl px-8"
                >
                  <FileText className="w-5 h-5" />
                  {t('hero.ctaProjects')}
                </Button>
                
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="gap-2 border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:scale-[1.02] transition-all duration-300 rounded-xl px-8"
                >
                  <Send className="w-4 h-4" />
                  {t('hero.ctaContact')}
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="gap-2 text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-transparent rounded-xl"
                >
                  <a href={getCVPath()} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    {t('hero.buttoncv')}
                  </a>
                </Button>
              </motion.div>

              {/* Redes Sociales */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex justify-center gap-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50"
              >
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300 bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-sm"
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                    >
                      <Image
                        src={getIconSrc(link)}
                        alt={link.name}
                        width={20}
                        height={20}
                        className="w-4 h-4"
                        priority
                      />
                    </a>
                  </Button>
                ))}
              </motion.div>
            </div>

            {/* Strip de Métricas de Negocio */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 bg-neutral-50/55 dark:bg-neutral-900/60 p-6 rounded-2xl border border-neutral-200/30 dark:border-neutral-800/40">
              <div className="text-center">
                <span className="block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  3+
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 block">
                  {t('about.stats.years')}
                </span>
              </div>
              <div className="text-center border-y sm:border-y-0 sm:border-x border-neutral-200/60 dark:border-neutral-800/60 py-4 sm:py-0">
                <span className="block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  7
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 block">
                  {t('about.stats.projects')}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  {t('about.stats.efficiencyValue')}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 block">
                  {t('about.stats.efficiency')}
                </span>
              </div>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Hero;