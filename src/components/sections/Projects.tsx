"use client"
import React, { useState } from 'react';
import { Code, Github, ExternalLink, X, TrendingUp, AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Layers, FileText } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  challengeKey: string;
  solutionKey: string;
  impactKey: string;
  images: string[];
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  category: 'management' | 'web';
}

const projectsData: Project[] = [
  {
    id: "crm",
    titleKey: "projects.projects.crm.title",
    descriptionKey: "projects.projects.crm.description",
    challengeKey: "projects.projects.crm.challenge",
    solutionKey: "projects.projects.crm.solution",
    impactKey: "projects.projects.crm.impact",
    images: [
      "/projects/crm/crm1.png",
      "/projects/crm/crm2.png",
      "/projects/crm/crm3.png"
    ],
    technologies: ["TypeScript", "React", "Tailwind CSS", "Kanban Board", "Vercel"],
    githubLink: "https://github.com/nicolas44373/crm",
    category: "management"
  },
  {
    id: "qr",
    titleKey: "projects.projects.qr.title",
    descriptionKey: "projects.projects.qr.description",
    challengeKey: "projects.projects.qr.challenge",
    solutionKey: "projects.projects.qr.solution",
    impactKey: "projects.projects.qr.impact",
    images: [
      "/projects/qr/qr1.png",
      "/projects/qr/qr2.png",
      "/projects/qr/qr3.png",
      "/projects/qr/qr4.png",
      "/projects/qr/qr5.png",
      "/projects/qr/qr6.png",
      "/projects/qr/qr7.png",
      "/projects/qr/qr8.png",
      "/projects/qr/qr9.png",
      "/projects/qr/qr10.png",
      "/projects/qr/qr11.png",
      "/projects/qr/qr12.png",
      "/projects/qr/qr13.png"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Mobile UX", "Vercel"],
    githubLink: "https://github.com/nicolas44373/qr",
    liveLink: "https://qr-six-alpha.vercel.app/",
    category: "web"
  },
  {
    id: "cobranzas",
    titleKey: "projects.projects.cobranzas.title",
    descriptionKey: "projects.projects.cobranzas.description",
    challengeKey: "projects.projects.cobranzas.challenge",
    solutionKey: "projects.projects.cobranzas.solution",
    impactKey: "projects.projects.cobranzas.impact",
    images: [
      "/projects/cobranzas/cobranzas.png",
      "/projects/cobranzas/cobranzas2.png",
      "/projects/cobranzas/cobranzas3.png",
      "/projects/cobranzas/cobranzas4.png",
      "/projects/cobranzas/cobranzas5.png",
      "/projects/cobranzas/cobranzas6.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Risk Scoring", "Vercel"],
    githubLink: "https://github.com/nicolas44373/cobranzas",
    liveLink: "https://pagos-self.vercel.app/",
    category: "management"
  },
  {
    id: "recau",
    titleKey: "projects.projects.recau.title",
    descriptionKey: "projects.projects.recau.description",
    challengeKey: "projects.projects.recau.challenge",
    solutionKey: "projects.projects.recau.solution",
    impactKey: "projects.projects.recau.impact",
    images: [
      "/projects/reca/reca1.png",
      "/projects/reca/reca2.png",
      "/projects/reca/reca3.png",
      "/projects/reca/reca4.png",
      "/projects/reca/reca5.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Data Audit", "Vercel"],
    githubLink: "https://github.com/nicolas44373/recaudacion",
    category: "management"
  },
  {
    id: "asistencia",
    titleKey: "projects.projects.asistencia.title",
    descriptionKey: "projects.projects.asistencia.description",
    challengeKey: "projects.projects.asistencia.challenge",
    solutionKey: "projects.projects.asistencia.solution",
    impactKey: "projects.projects.asistencia.impact",
    images: [
      "/projects/asist/asist1.png",
      "/projects/asist/asist2.png",
      "/projects/asist/asist3.png",
      "/projects/asist/asist4.png",
      "/projects/asist/asist5.png",
      "/projects/asist/asist6.png",
      "/projects/asist/asist7.png",
      "/projects/asist/asist8.png",
      "/projects/asist/asist9.png",
      "/projects/asist/asist10.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Report Engine", "Vercel"],
    githubLink: "https://github.com/nicolas44373/asistencia",
    category: "management"
  },
  {
    id: "alenort",
    titleKey: "projects.projects.alenort.title",
    descriptionKey: "projects.projects.alenort.description",
    challengeKey: "projects.projects.alenort.challenge",
    solutionKey: "projects.projects.alenort.solution",
    impactKey: "projects.projects.alenort.impact",
    images: [
      "/projects/alenort/alenort10.jpg",
      "/projects/alenort/alenort11.jpg",
      "/projects/alenort/alenort12.jpg"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "SEO & Speed", "Vercel"],
    githubLink: "https://github.com/nicolas44373/web",
    liveLink: "https://www.alenort.com/",
    category: "web"
  },
  {
    id: "music",
    titleKey: "projects.projects.music.title",
    descriptionKey: "projects.projects.music.description",
    challengeKey: "projects.projects.music.challenge",
    solutionKey: "projects.projects.music.solution",
    impactKey: "projects.projects.music.impact",
    images: [
      "/projects/music/music1.jpg",
      "/projects/music/music2.jpg",
      "/projects/music/music3.jpg",
      "/projects/music/music4.jpg",
      "/projects/music/music5.jpg"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Social Leads", "Vercel"],
    githubLink: "https://github.com/nicolas44373/music",
    category: "web"
  }
];

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-neutral-900/50"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageUrl}
          alt={title}
          className="object-contain max-h-[85vh] rounded-lg shadow-2xl bg-white"
          width={1920}
          height={1080}
        />
      </div>
    </motion.div>
  );
};

interface ProjectRowProps {
  project: Project;
  isEven: boolean;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, isEven }) => {
  const { t } = useTranslation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'business' | 'tech'>('business');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`grid lg:grid-cols-12 gap-10 items-start py-16 border-b border-neutral-200/50 dark:border-neutral-800/50 last:border-0`}>
      {/* Visual Mockup - Columna Izquierda/Derecha Alternando */}
      <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-last' : ''}`}>
        
        {/* Simulador de Navegador Web */}
        <div className="relative border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-neutral-900 group">
          {/* Cabecera del Navegador */}
          <div className="bg-neutral-100 dark:bg-neutral-800/80 border-b border-neutral-200/80 dark:border-neutral-800 px-4 py-3 flex items-center gap-4">
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80 inline-block"></span>
            </div>
            <div className="flex-grow max-w-md bg-neutral-200/50 dark:bg-neutral-900/50 rounded-lg py-1 px-3 text-[11px] text-neutral-500 dark:text-neutral-400 text-center truncate font-mono select-none">
              {project.liveLink ? project.liveLink.replace('https://', '') : `${project.id}-dashboard.dev`}
            </div>
          </div>

          {/* Área de Visualización */}
          <div 
            onClick={() => setLightboxOpen(true)}
            className="relative aspect-[16/10] bg-white flex items-center justify-center cursor-zoom-in overflow-hidden border-b border-neutral-200 dark:border-neutral-800"
          >
            <Image
              src={project.images[selectedImageIndex]}
              alt={`${t(project.titleKey)} Screenshot ${selectedImageIndex + 1}`}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={isEven}
            />

            {/* Controles rápidos sobre la imagen */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-3 p-2 rounded-full bg-neutral-900/40 hover:bg-neutral-900/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-3 p-2 rounded-full bg-neutral-900/40 hover:bg-neutral-900/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            
            {/* Indicador numérico */}
            <div className="absolute bottom-3 right-3 bg-neutral-900/70 border border-white/10 text-white text-[11px] font-medium px-2 py-0.5 rounded-full select-none">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>

        {/* Miniaturas en carrusel horizontal */}
        {project.images.length > 1 && (
          <div className="flex gap-2 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
            {project.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 flex-shrink-0 bg-white transition-all duration-200 ${
                  selectedImageIndex === idx
                    ? 'border-blue-500 dark:border-blue-400 scale-[1.05] shadow-md shadow-blue-500/10'
                    : 'border-neutral-200 dark:border-neutral-800 opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Contenido Comercial & Técnico - Columna Derecha/Izquierda */}
      <div className="lg:col-span-6 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/60 uppercase tracking-wider text-[10px]">
              {t('projects.caseStudy')}
            </Badge>
            <Badge variant="secondary" className="text-[10px] capitalize">
              {project.category === 'management' ? t('projects.filterManagement') : t('projects.filterWeb')}
            </Badge>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {t(project.titleKey)}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            {t(project.descriptionKey)}
          </p>
        </div>

        {/* Selector de pestañas: Caso de Negocio / Características Técnicas */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 flex gap-4">
          <button
            onClick={() => setActiveTab('business')}
            className={`pb-2.5 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'business'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {t('projects.tabCase')}
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`pb-2.5 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'tech'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {t('projects.tabTech')}
          </button>
        </div>

        {/* Contenido dinámico de las pestañas */}
        <div className="min-h-[160px]">
          {activeTab === 'business' ? (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex gap-3 items-start">
                <div className="p-1.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 mt-0.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
                    {t('projects.challengeLabel')}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    {t(project.challengeKey)}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-emerald-500/5 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-950/60 p-4 rounded-xl">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <TrendingUp className="w-4 h-4 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                    {t('projects.impactLabel')}
                  </h4>
                  <p className="text-sm text-emerald-700/90 dark:text-emerald-400/90 mt-1 leading-relaxed font-medium">
                    {t(project.impactKey)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex gap-3 items-start">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
                    {t('projects.solutionLabel')}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    {t(project.solutionKey)}
                  </p>
                </div>
              </div>

              {/* Tecnologías utilizadas */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  Especificaciones Técnicas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Links a Código y Demo */}
        <div className="flex gap-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 border-neutral-300 dark:border-neutral-700 text-xs rounded-xl"
          >
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              {t('projects.button1')}
            </a>
          </Button>
          {project.liveLink && (
            <Button
              asChild
              size="sm"
              className="gap-2 bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-500 dark:hover:bg-blue-500 text-xs rounded-xl"
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                {t('projects.button2')}
              </a>
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            imageUrl={project.images[selectedImageIndex]}
            title={t(project.titleKey)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'management' | 'web'>('all');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="min-h-screen py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                {t('projects.title')}
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Casos reales de sistemas diseñados para generar valor y eficiencia
              </p>
            </div>
          </div>

          {/* Filtros de Proyectos */}
          <div className="flex bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-neutral-900 shadow-sm text-neutral-800 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              {t('projects.filterAll')}
            </button>
            <button
              onClick={() => setFilter('management')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'management'
                  ? 'bg-white dark:bg-neutral-900 shadow-sm text-neutral-800 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              {t('projects.filterManagement')}
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'web'
                  ? 'bg-white dark:bg-neutral-900 shadow-sm text-neutral-800 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              {t('projects.filterWeb')}
            </button>
          </div>
        </div>

        {/* Listado de Casos de Éxito */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <ProjectRow 
                  project={project} 
                  isEven={index % 2 === 0} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;