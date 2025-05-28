"use client"
import React, { useState, useEffect } from 'react';
import { Code, Github, ExternalLink, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  titleKey: string;
  descriptionKey: string;
  images: string[];
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, title }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-7xl max-h-[90vh] w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[85vh]">
                    <Image
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      className="object-contain"
                      fill
                      sizes="100vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-12 w-12" />
            <CarouselNext className="right-4 h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };
  
  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 relative">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="h-64 relative"
                  onClick={handleImageClick}
                >
                  <Image
                    src={image}
                    alt={`${t(project.titleKey)} - Image ${index + 1}`}
                    className="object-cover transition-transform duration-300 hover:scale-105 hover:brightness-90"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="flex flex-col flex-grow">
        <CardHeader>
          <CardTitle className="text-2xl">{t(project.titleKey)}</CardTitle>
          <CardDescription
            className="text-base"
            dangerouslySetInnerHTML={{ __html: t(project.descriptionKey) }}
          />
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-6 pt-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">{t('projects.button1')}</span>
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm">{t('projects.button2')}</span>
            </a>
          )}
        </CardFooter>
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={project.images}
        title={t(project.titleKey)}
      />
    </Card>
  );
};

const projects = [
  {
    titleKey: "projects.projects.alenort.title",
    descriptionKey: "projects.projects.alenort.description",
    images: [
      "/projects/alenort/alenort1.jpg",
      "/projects/alenort/alenort2.jpg",
      "/projects/alenort/alenort3.jpg",
      "/projects/alenort/alenort4.jpg",
      "/projects/alenort/alenort5.jpg",
      "/projects/alenort/alenort6.jpg",
      "/projects/alenort/alenort7.jpg",
    ],
    technologies: ["JavaScript", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/nicolas44373/web",
    liveLink: "https://www.alenort.com/"
  },
  {
    titleKey: "projects.projects.qr.title",
    descriptionKey: "projects.projects.qr.description",
    images: [
      "/projects/qr/qr1.jpg",
      "/projects/qr/qr2.jpg",
      "/projects/qr/qr3.jpg",
      "/projects/qr/qr4.jpg",
    ],
    technologies: ["JavaScript", "Tailwind CSS", "TypeScript", "Vercel"],
    githubLink: "https://github.com/nicolas44373/qr",
    liveLink: "https://qr-six-alpha.vercel.app/"
  },
  {
    titleKey: "projects.projects.recau.title",
    descriptionKey: "projects.projects.recau.description",
    images: [
      "/projects/reca/recaudacion1.jpg",
      "/projects/reca/recaudacion2.jpg",
      "/projects/reca/recaudacion3.jpg",
    ],
    technologies: ["JavaScript", "Tailwind CSS", "TypeScript", "Vercel"],
    githubLink: "https://github.com/nicolas44373/recaudacion",
  },
  {
    titleKey: "projects.projects.asistencia.title",
    descriptionKey: "projects.projects.asistencia.description",
    images: [
      "/projects/asist/asist1.jpg",
      "/projects/asist/asist2.jpg",
      "/projects/asist/asist3.jpg",
      "/projects/asist/asist4.jpg",
    ],
    technologies: [ "Tailwind CSS", "TypeScript", "Vercel"],
    githubLink: "https://github.com/nicolas44373/asistencia",
  },
  {
    titleKey: "projects.projects.music.title",
    descriptionKey: "projects.projects.music.description",
    images: [
      "/projects/music/music1.jpg",
      "/projects/music/music2.jpg",
      "/projects/music/music3.jpg",
      "/projects/music/music4.jpg",
      "/projects/music/music5.jpg",
    ],
    technologies: [ "Tailwind CSS", "TypeScript", "Vercel"],
    githubLink: "https://github.com/nicolas44373/asistencia",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Code className="w-8 h-8" />
          <h2 className="text-4xl font-bold">{t('projects.title')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;