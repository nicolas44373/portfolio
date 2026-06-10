"use client"
import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  disabledOnMobile?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '', 
  disabledOnMobile = true 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (disabledOnMobile && isMobile) return;
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabledOnMobile && isMobile) return;
    
    let rect = rectRef.current;
    if (!rect) {
      if (!cardRef.current) return;
      rect = cardRef.current.getBoundingClientRect();
      rectRef.current = rect;
    }

    const width = rect.width;
    const height = rect.height;

    // Calcular posición del mouse respecto al centro de la tarjeta (-width/2 a width/2)
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calcular grados de rotación (máximo 12 grados de inclinación)
    const rX = -(mouseY / height) * 12;
    const rY = (mouseX / width) * 12;

    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    setRotate({ x: 0, y: 0 });
  };

  const transformStyle = disabledOnMobile && isMobile 
    ? {} 
    : {
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d' as const,
      };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={`${className} transition-shadow duration-300`}
    >
      <div 
        style={disabledOnMobile && isMobile ? {} : { transform: 'translateZ(20px)', transformStyle: 'preserve-3d' as const }} 
        className="h-full w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
