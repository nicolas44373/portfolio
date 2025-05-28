'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

type Props = {
  src: string;
  title?: string;
  artist?: string;
};

export default function MusicPlayer({ src, title = "Hydrogen", artist = "Hotline Miami Soundtrack" }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2); // volumen inicial en 20%
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const previousVolume = useRef(volume);
  const [showControls, setShowControls] = useState(false);
  const controlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Para asegurar renderizado solo en cliente
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isMuted) {
      setVolume(previousVolume.current);
      audio.volume = previousVolume.current;
    } else {
      previousVolume.current = volume;
      setVolume(0);
      audio.volume = 0;
    }
    
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };
  
  const handleEnded = () => {
    const audio = audioRef.current;
    if (audio) {
      // Reiniciar la posición de reproducción
      audio.currentTime = 0;
      setCurrentTime(0);
      
      // Reproducir automáticamente de nuevo
      audio.play();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const seekTo = (value: number[]) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  
  const toggleControls = () => {
    setShowControls(!showControls);
    
    // Reiniciar el temporizador cada vez que se muestran los controles
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }
    
    // Si estamos mostrando los controles, configurar un temporizador para ocultarlos
    if (!showControls) {
      controlsTimerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 5000); // Ocultar después de 5 segundos
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  if (!isMounted) return null;

  return (
    <>
      {/* Reproductor principal para escritorio y tablet */}
      <div className="hidden md:block fixed bottom-4 left-24 bg-white/90 backdrop-blur-md shadow-lg px-6 py-4 rounded-2xl flex-col w-80 dark:bg-neutral-800/90 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1 overflow-hidden">
            <p className="font-medium text-sm truncate dark:text-white">{title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{artist}</p>
          </div>
        </div>
        
        <div className="w-full mb-3">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            className="w-full"
            onValueChange={seekTo}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMute}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value: number[]) => {
                setVolume(value[0] / 100);
                if (value[0] > 0 && isMuted) {
                  setIsMuted(false);
                }
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Reproductor flotante minimalista para móvil */}
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        <div className="flex flex-col items-start">
          {/* Controles expandidos */}
          {showControls && (
            <div className="mb-3 p-3 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-64">
              <div className="mb-2">
                <p className="font-medium text-sm truncate dark:text-white">{title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{artist}</p>
              </div>
              
              <div className="mb-2">
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={0.1}
                  className="w-full"
                  onValueChange={seekTo}
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleMute}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                
                <Slider
                  value={[volume * 100]}
                  max={100}
                  step={1}
                  className="w-32"
                  onValueChange={(value: number[]) => {
                    setVolume(value[0] / 100);
                    if (value[0] > 0 && isMuted) {
                      setIsMuted(false);
                    }
                  }}
                />
              </div>
            </div>
          )}
          
          {/* Botón flotante con indicador de progreso */}
          <div className="relative">
            {/* Indicador de progreso circular */}
            <svg className="absolute w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                strokeWidth="2"
                stroke="#d1d5db"
                fill="transparent"
                className="dark:stroke-gray-700"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                strokeWidth="2"
                stroke="#4f46e5"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - currentTime / (duration || 1))}`}
              />
            </svg>
            
            {/* Contenedor para los botones */}
            <div className="flex items-center justify-center relative">
              {/* Botón principal (para mostrar/ocultar controles) */}
              <button 
                onClick={toggleControls}
                className="z-10 w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <Music size={18} className="text-indigo-600 dark:text-indigo-400" />
              </button>
              
              {/* Botón de reproducción */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="absolute -bottom-1.5 -right-1.5 z-20 w-6 h-6 flex items-center justify-center bg-indigo-600 rounded-full shadow-md text-white"
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
              </button>
              
              {/* Indicador mínimo de tiempo */}
              <div className="absolute -top-6 left-0 right-0 text-center">
                <span className="text-xs bg-white/80 dark:bg-neutral-800/80 px-2 py-0.5 rounded-full shadow-sm text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                  {formatTime(currentTime)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reproductor central para móvil (oculto por defecto) */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-lg px-6 py-4 rounded-2xl flex-col w-80 dark:bg-neutral-800/90 border border-gray-200 dark:border-gray-700 hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1 overflow-hidden">
            <p className="font-medium text-sm truncate dark:text-white">{title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{artist}</p>
          </div>
        </div>
        
        <div className="w-full mb-3">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            className="w-full"
            onValueChange={seekTo}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMute}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value: number[]) => {
                setVolume(value[0] / 100);
                if (value[0] > 0 && isMuted) {
                  setIsMuted(false);
                }
              }}
            />
          </div>
        </div>
      </div>
      
      <audio 
        ref={audioRef} 
        src={src} 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
    </>
  );
}