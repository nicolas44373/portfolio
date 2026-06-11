"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

interface StaticStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
  phase: number;
}

interface SpeedStar {
  angle: number;
  r: number;
  speed: number;
  color: string;
  width: number;
  history: { x: number; y: number }[];
}

export default function LayoutEffects() {
  const { scrollYProgress } = useScroll();
  const [isWarping, setIsWarping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Guardamos las estrellas en Refs para cargarlas UNA sola vez al montar la web
  // Evitamos asignaciones de memoria (GC pause) en cada click.
  const staticStarsRef = useRef<StaticStar[]>([]);
  const starsRef = useRef<SpeedStar[]>([]);

  // Inicializar arrays de estrellas al cargar la página
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 120 Estrellas estáticas de fondo
    staticStarsRef.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.8 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
    }));

    // 80 Líneas de velocidad para rendimiento de 120 FPS estable
    starsRef.current = Array.from({ length: 80 }, () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        angle,
        r: 2 + Math.random() * 20,
        speed: 3 + Math.random() * 4,
        color: '#ffffff',
        width: 1.0 + Math.random() * 1.6,
        history: [] as { x: number; y: number }[],
      };
    });

    // Ejecutar un pase de dibujo "fantasma" silencioso para calentar el compilador JIT de Canvas y texturas de la GPU
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 10, 10);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(5, 5);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.clearRect(0, 0, 10, 10);
      }
    }
  }, []);

  useEffect(() => {
    const handleTeleport = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      const targetId = customEvent.detail?.id;
      if (!targetId) return;

      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        // Resetear las posiciones de las líneas a su estado inicial de forma instantánea antes de iniciar
        starsRef.current.forEach((star) => {
          star.r = 2 + Math.random() * 20;
          star.speed = 3 + Math.random() * 4;
          star.history = [];
        });

        // Iniciar efecto warp
        setIsWarping(true);

        // Snap scroll a la mitad de la transición (180ms)
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto' // Instantáneo
          });
        }, 180);

        // Terminar efecto warp (400ms)
        setTimeout(() => {
          setIsWarping(false);
        }, 400);
      }
    };

    window.addEventListener('teleport-scroll', handleTeleport);
    return () => window.removeEventListener('teleport-scroll', handleTeleport);
  }, []);

  // Animación de Warp Speed en Canvas
  useEffect(() => {
    if (!isWarping) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Re-ubicar estrellas de fondo al redimensionar
      staticStarsRef.current.forEach(s => {
        s.x = Math.random() * width;
        s.y = Math.random() * height;
      });
    };
    window.addEventListener('resize', handleResize);

    const startTime = Date.now();
    const staticStars = staticStarsRef.current;
    const stars = starsRef.current;

    const draw = () => {
      const elapsed = Date.now() - startTime;

      // 1. Fondo negro absoluto
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 2. Dibujar estrellas estáticas
      staticStars.forEach((s) => {
        const twinkle = 0.5 + Math.abs(Math.sin(elapsed * 0.003 + s.phase)) * 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * twinkle})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });

      // 3. Dibujar líneas de velocidad con estelas calculadas
      stars.forEach((star) => {
        star.speed *= 1.18;
        star.r += star.speed;

        const currentX = cx + Math.cos(star.angle) * star.r;
        const currentY = cy + Math.sin(star.angle) * star.r;

        star.history.push({ x: currentX, y: currentY });
        if (star.history.length > 5) {
          star.history.shift();
        }

        if (star.history.length > 1) {
          // 1. Dibujar el brillo/halo translúcido (línea gruesa) - Mucho más rápido que shadowBlur
          ctx.beginPath();
          ctx.moveTo(star.history[0].x, star.history[0].y);
          for (let i = 1; i < star.history.length; i++) {
            ctx.lineTo(star.history[i].x, star.history[i].y);
          }
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
          ctx.lineWidth = star.width * 3.5;
          ctx.lineCap = 'round';
          ctx.stroke();

          // 2. Dibujar el núcleo brillante (línea fina opaca)
          ctx.beginPath();
          ctx.moveTo(star.history[0].x, star.history[0].y);
          for (let i = 1; i < star.history.length; i++) {
            ctx.lineTo(star.history[i].x, star.history[i].y);
          }
          ctx.strokeStyle = star.color;
          ctx.lineWidth = star.width;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      // Limpiar lienzo al terminar
      ctx.clearRect(0, 0, width, height);
    };
  }, [isWarping]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 z-50 origin-left print:hidden"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating 3D Glowing background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_75%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -50, 25, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_75%)] dark:bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] rounded-full"
        />
      </div>

      {/* Sci-Fi Warp Speed Overlay (Siempre montado para evitar lag en render inicial) */}
      <motion.div
        animate={{
          opacity: isWarping ? [0, 1, 1, 0] : 0,
        }}
        transition={{
          times: [0, 0.15, 0.45, 1],
          duration: 0.4,
          ease: "linear"
        }}
        className="fixed inset-0 z-[100] bg-neutral-950 pointer-events-none overflow-hidden"
        style={{
          visibility: isWarping ? 'visible' : 'hidden', // Evita procesamiento del layout cuando está inactivo
        }}
      >
        {/* Canvas para el render del Túnel de Hipervelocidad */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Efecto Vignette radial para concentrar la luz en el centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(3,7,18,0.85)_100%)] pointer-events-none" />
      </motion.div>
    </>
  );
}
