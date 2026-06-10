"use client"
import React from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Printer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CV_ES() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-6 sm:py-8 print:py-0 print:bg-white print:dark:bg-white text-neutral-800">
      
      {/* Botones de acción flotantes (ocultos al imprimir) */}
      <div className="max-w-[21cm] mx-auto mb-6 px-4 flex flex-col sm:flex-row gap-4 justify-between items-center print:hidden">
        <Link 
          href="/#home"
          className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          Imprimir / Guardar como PDF
        </button>
      </div>

      {/* Página A4 del Currículum */}
      <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white dark:bg-white text-neutral-900 shadow-2xl print:shadow-none p-6 sm:p-10 md:p-[2cm] print:p-0 flex flex-col justify-between font-sans text-[11px] leading-relaxed">
        
        {/* Cabecera */}
        <div className="text-center space-y-3 pb-4 border-b-2 border-neutral-800">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Nicolás Alurralde
          </h1>
          <p className="text-xs sm:text-sm font-bold text-blue-700 tracking-wider uppercase">
            Desarrollador Full-Stack & Especialista en Soluciones de Gestión
          </p>
          
          {/* Contacto */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[10px] text-neutral-600 font-medium">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              nicolasalurralde39@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              (+54) 381 5507992
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              Tucumán, Argentina
            </span>
            <a href="https://github.com/nicolas44373" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-neutral-900">
              <Github className="w-3.5 h-3.5 text-neutral-500" />
              github.com/nicolas44373
            </a>
            <a href="https://www.linkedin.com/in/nicolas-alurralde-366939255/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-neutral-900">
              <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
              linkedin.com/in/nicolas-alurralde
            </a>
          </div>
        </div>

        {/* Cuerpo */}
        <div className="space-y-4 py-4 flex-grow">
          
          {/* Perfil Profesional */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Perfil Profesional
            </h2>
            <p className="text-neutral-700 text-justify">
              Técnico Universitario en Programación (UTN FRT) y Desarrollador Full-Stack especializado en diseñar, implementar y desplegar sistemas de gestión empresarial (ERP, CRM) y plataformas transaccionales. Cuento con un perfil híbrido único que combina sólidos conocimientos en ingeniería de software con experiencia práctica en operaciones comerciales y control financiero. Mi enfoque está orientado a construir código limpio y escalable que optimice procesos, reduzca costos y genere un retorno de inversión (ROI) claro para el negocio.
            </p>
          </section>

          {/* Experiencia Profesional */}
          <section className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Experiencia Profesional
            </h2>
            
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="font-bold text-neutral-900 text-xs">
                  Desarrollador Full-Stack & Analista de Operaciones
                </h3>
                <span className="text-neutral-500 font-semibold text-[10px] flex-shrink-0">2024 — Actualmente</span>
              </div>
              <div className="flex justify-between items-baseline text-neutral-600 font-bold text-[10px]">
                <span>Distribuidora Alenort</span>
                <span>Tucumán, Argentina</span>
              </div>

              {/* Sub-bloque Desarrollo de Software */}
              <div className="space-y-1 mt-1">
                <h4 className="font-bold text-neutral-800 text-[10px] uppercase tracking-wider">
                  Ingeniería de Software & Automatización de Procesos:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-neutral-700">
                  <li>
                    <strong>Sistema de Asistencia Geocercado:</strong> Desarrollé una app móvil de fichaje por DNI y geolocalización (geocerca ajustable de 100m) con emparejamiento único de dispositivo (device fingerprinting) para evitar fraudes. Creé un panel administrativo para RRHH que <strong>redujo en un 80% el tiempo mensual de liquidación de sueldos</strong> y horas extras.
                  </li>
                  <li>
                    <strong>Control de Recaudación:</strong> Diseñé e implementé una plataforma web interna para auditar arqueos de caja diarios en múltiples puntos de venta de forma centralizada, reemplazando las planillas de papel físicas y <strong>eliminando el 100% de errores de tipeo</strong> o pérdidas de caja.
                  </li>
                  <li>
                    <strong>Catálogo QR E-Commerce:</strong> Construí un catálogo digital autogestionado con carrito de compras que integra geolocalización interactiva sobre mapa tipo Uber (precisión del 100% para entregas de pedidos) y un club de fidelidad activo por sistema de puntos de recompensa.
                  </li>
                  <li>
                    <strong>Portal Institucional:</strong> Diseñé y desplegué la web corporativa mayorista oficial (<a href="https://www.alenort.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-medium">alenort.com</a>), optimizándola para motores de búsqueda (SEO) y velocidad, multiplicando las consultas de clientes regionales.
                  </li>
                </ul>
              </div>

              {/* Sub-bloque Operaciones Administrativas */}
              <div className="space-y-1 mt-2">
                <h4 className="font-bold text-neutral-800 text-[10px] uppercase tracking-wider">
                  Operaciones Administrativas & Control Financiero:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-neutral-700">
                  <li>
                    Auditoría contable y conciliación de cuentas corrientes de clientes mayoristas e insumos con proveedores.
                    Coordinación de depósitos bancarios, control de cobros con cheques y administración diaria de altos volúmenes de dinero.
                  </li>
                  <li>
                    Gestión de base de datos de inventario de mercadería, sincronización de stock y actualización de precios automatizada.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Proyectos Destacados */}
          <section className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Proyectos Destacados (Casos de Éxito)
            </h2>

            <div className="space-y-1.5">
              <div>
                <h3 className="font-bold text-neutral-900 text-xs">
                  CRM Clínico Bariátrico (SaaS de Gestión Médica)
                </h3>
                <p className="text-neutral-500 text-[9px] font-semibold">React, TypeScript, Tailwind CSS, Vercel</p>
              </div>
              <p className="text-neutral-700 text-justify">
                Desarrollé un CRM especializado para clínicas de cirugía bariátrica enfocado en el seguimiento multidisciplinario de pacientes pre y post-quirúrgicos. Integra expedientes clínicos digitales dinámicos, control de recetas y suplementos bariátricos recetados, agenda de turnos inteligente y control de pedidos de farmacia.
              </p>
            </div>

            <div className="space-y-1.5 mt-2">
              <div>
                <h3 className="font-bold text-neutral-900 text-xs">
                  Gestión de Cobranzas y Créditos (Fintech Dashboard)
                </h3>
                <p className="text-neutral-500 text-[9px] font-semibold">React, TypeScript, Tailwind CSS, Vercel</p>
              </div>
              <p className="text-neutral-700 text-justify">
                Plataforma de administración de cuentas corrientes de clientes y seguimiento de créditos en cuotas. Cuenta con un dashboard contable de reportes de saldos diarios, alertas automatizadas de vencimiento de deudas para mitigar el índice de morosidad y semáforo visual de riesgo crediticio por cliente.
              </p>
            </div>
          </section>

          {/* Habilidades y Tecnologías */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-8 gap-y-1 text-neutral-700">
              <p><strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap</p>
              <p><strong>Backend & APIs:</strong> Node.js, Express, REST APIs, C# (.NET), PHP</p>
              <p><strong>Bases de Datos:</strong> MongoDB, MySQL, Firebase, Supabase (PostgreSQL)</p>
              <p><strong>Escritorio:</strong> Tauri (Rust/HTML/JS), Windows Forms (C#)</p>
              <p><strong>Herramientas & DevOps:</strong> Git, GitHub, Vercel, Netlify, Postman, Figma, Excel</p>
              <p><strong>Idiomas:</strong> Español (Nativo), Inglés (Intermedio B2)</p>
            </div>
          </section>

          {/* Educación */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Educación
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-neutral-900 text-xs">
                  Técnico Universitario en Programación
                </h3>
                <p className="text-neutral-600 font-medium">Universidad Tecnológica Nacional - Facultad Regional Tucumán</p>
              </div>
              <span className="text-neutral-500 font-semibold text-[10px] flex-shrink-0">2023 — 2024</span>
            </div>
          </section>
        </div>

        {/* Pie de Página */}
        <div className="text-center text-neutral-400 text-[8px] border-t border-neutral-200 pt-2 print:pt-4">
          Nicolás Alurralde · Desarrollador Full-Stack · Currículum Vitae
        </div>

      </div>
    </div>
  );
}
