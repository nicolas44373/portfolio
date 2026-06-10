"use client"
import React from 'react';
import { Grid2X2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Tech = () => {
  const { t } = useTranslation();

  const technologies = {
    languages: [
      { name: 'HTML5', icon: '/icons/html5.svg' },
      { name: 'CSS3', icon: '/icons/css3.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'PHP', icon: '/icons/php.svg' },
      { name: 'C#', icon: '/icons/csharp.svg' },
      { name: 'Rust', icon: '/icons/Rust_light.svg' },
    ],
    databases: [
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'FireBase', icon: '/icons/firebase.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
    ],
    frameworks: [
      { name: 'Astro', icon: '/icons/astro.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
      { name: 'Express', icon: '/icons/express.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Tailwind', icon: '/icons/tailwind.svg' },
      { name: 'Tauri', icon: '/icons/tauri.svg' },
    ],
    tools: [
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
      { name: 'Vercel', icon: '/icons/vercel.svg' },
      { name: 'Notion', icon: '/icons/notion.svg' },
      { name: 'Netlify', icon: '/icons/netlify.svg' },
      { name: 'Trello', icon: '/icons/trello.svg' },
    ],
  };

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      languages: t('tech.cat1'),
      databases: t('tech.cat2'),
      frameworks: t('tech.cat3'),
      tools: t('tech.cat4'),
    };
    return titles[category] || 'Categoría';
  };

  return (
    <section id="tech" className="min-h-screen py-24 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute left-0 bottom-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-16 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-6">
          <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <Grid2X2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
              {t('tech.title')}
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Las herramientas y tecnologías que utilizo para dar vida a tus proyectos
            </p>
          </div>
        </div>

        {/* Rejilla de Categorías */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 border-l-4 border-blue-500 pl-3">
                {getCategoryTitle(category)}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="group"
                  >
                    <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/60 shadow-sm hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-200 relative overflow-hidden">
                      
                      {/* Efecto de brillo de fondo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="w-12 h-12 flex items-center justify-center relative z-10">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          className="w-9 h-9 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          width={36}
                          height={36}
                        />
                      </div>
                      <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors relative z-10">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;