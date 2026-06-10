// src/lib/i18n.ts
'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      hero: {
        badge: "Disponible para Nuevos Proyectos",
        role: "Desarrollador de Soluciones Web & Sistemas de Gestión",
        text: "Diseño y desarrollo software a medida que transforma procesos de negocio: desde sistemas ERP y CRM hasta plataformas de cobro y catálogos digitales interactivos. Mi enfoque combina código de alto rendimiento con interfaces intuitivas orientadas a la conversión y la eficiencia.",
        buttoncv: "Descargar CV",
        ctaProjects: "Ver Casos de Éxito",
        ctaContact: "Iniciar un Proyecto"
      },
      about: {
        title: "Propuesta de Valor",
        text1: "Me especializo en cerrar la brecha entre la complejidad técnica y las necesidades reales del negocio. Desde 2022, he construido soluciones de software que operan en producción, ayudando a empresas a digitalizarse y optimizar su trabajo diario.",
        text2: "Mi formación técnica formal como Técnico Universitario en Programación (UTN FRT) combinada con experiencia en el mundo real me permite diseñar bases de datos sólidas, estructurar APIs eficientes y crear interfaces que los usuarios finales adoptan con facilidad y sin fricción.",
        text3: "No busco solo escribir código. Mi meta es entregar herramientas de software que generen un retorno de inversión claro para tu negocio, automatizando tareas repetitivas y liberando tiempo administrativo.",
        stats: {
          years: "Años en Producción",
          projects: "Sistemas Entregados",
          efficiency: "Eficiencia Operativa",
          efficiencyValue: "100%"
        },
        features: {
          webdev: {
            title: "Sistemas y Apps Web",
            description: "Dashboards de administración, CRM y plataformas financieras con React, Next.js y Node.js."
          },
          design: {
            title: "Experiencia de Usuario",
            description: "Interfaces de usuario limpias, rápidas y ultra intuitivas con Tailwind CSS diseñadas para la productividad."
          },
          optimization: {
            title: "Automatización",
            description: "Digitalización de flujos de trabajo manuales, reduciendo errores y tiempos operativos significativamente."
          },
          desktop: {
            title: "Apps de Escritorio",
            description: "Desarrollo de software multiplataforma rápido con Tauri y C# para entornos empresariales cerrados."
          }
        }
      },
      tech: {
        title: "Stack Tecnológico",
        cat1: "Lenguajes de Programación",
        cat2: "Bases de Datos & Almacenamiento",
        cat3: "Frameworks & Librerías",
        cat4: "Herramientas & Despliegue"
      },
      projects: {
        title: "Casos de Éxito",
        button1: "Código Fuente",
        button2: "Demo en Vivo",
        caseStudy: "Caso de Éxito",
        tabCase: "Caso de Negocio",
        tabTech: "Especificaciones",
        challengeLabel: "El Desafío Comercial",
        solutionLabel: "Nuestra Solución Técnica",
        impactLabel: "Impacto en el Negocio",
        filterAll: "Todos los Proyectos",
        filterManagement: "Gestión & Operaciones",
        filterWeb: "Sitios & Canales de Venta",
        projects: {
          alenort: {
            title: "Alenort — Portal Corporativo y de Ventas",
            description: "Canal digital corporativo premium y optimizado para una distribuidora líder de productos avícolas, enfocado en captar nuevos distribuidores mayoristas de manera automatizada.",
            challenge: "La distribuidora carecía de presencia digital estructurada, limitando la captación de nuevos clientes corporativos regionales y dependiendo del envío manual de catálogos estáticos en PDF.",
            solution: "Sitio web profesional con catálogo dinámico completo de productos, optimización SEO para términos comerciales claves, canalización rápida a formularios y CDN de alto rendimiento.",
            impact: "Aumento significativo en consultas regionales semanales de nuevos distribuidores mayoristas y modernización de la imagen digital comercial."
          },
          qr: {
            title: "Catálogo QR — E-Commerce y Fidelización",
            description: "Catálogo digital interactivo con carrito de compras, club de fidelización con sistema de puntos y geolocalización exacta de entrega estilo Uber.",
            challenge: "Imprecisión recurrente en las direcciones de entrega a domicilio escritas por los clientes y falta de incentivos para retener y premiar al comprador recurrente.",
            solution: "Desarrollo de catálogo móvil con checkout completo, integración de mapa interactivo con puntero móvil para ubicación GPS exacta, club de fidelidad que suma puntos por registro y por compra, y panel administrativo para gestionar productos, pedidos y cuentas.",
            impact: "Entregas con precisión del 100% mediante posicionamiento GPS, reducción a cero de pérdidas logísticas, y una tasa alta de compras recurrentes gracias al Club de Puntos."
          },
          recau: {
            title: "Control de Recaudación — Auditoría Financiera",
            description: "Software interno de digitalización financiera para el registro, arqueo, balanceo y control diario del flujo de caja de múltiples terminales comerciales.",
            challenge: "El registro manual en planillas de papel generaba demoras de días para detectar descuadres financieros, pérdida física de comprobantes y frecuentes errores de tipeo.",
            solution: "Panel de control administrativo con base de datos centralizada, validación estricta de arqueos por turno de caja, módulo de carga de tickets de depósito e histórico contable inalterable.",
            impact: "Eliminación del 100% de errores de cálculo en recaudaciones diarias, detección inmediata de discrepancias y visualización gerencial del flujo de caja en tiempo real."
          },
          asistencia: {
            title: "Fichaje Geocercado — Gestión de Personal (HR)",
            description: "Sistema móvil de control horario con validación por DNI, geolocalización obligatoria por geocercas y detección de dispositivo para evitar fraude de marcación.",
            challenge: "Fraudes de fichaje cruzado (empleados marcando por compañeros) y decenas de horas del departamento de RRHH gastadas recolectando planillas manuales de asistencia a fin de mes.",
            solution: "Aplicación móvil donde el empleado ingresa con DNI bajo un radio de geocerca ajustable (ej. 100m) y vincula su usuario al ID de su dispositivo para prohibir marcaciones múltiples. Incluye panel de control para RRHH y exportación profesional a Excel para liquidar haberes.",
            impact: "Eliminación absoluta del fraude por fichajes simulados, control preciso de horas extra/ausencias y reducción del tiempo administrativo de nómina en un 80%."
          },
          music: {
            title: "MusicCar — Galería de Trabajos y Ventas",
            description: "Canal digital interactivo premium desarrollado para taller de equipamiento de audio y personalización automotriz, optimizado para captación de clientes de alta gama.",
            challenge: "Dificultad para demostrar digitalmente la calidad de las instalaciones de sonido de alta fidelidad realizadas en vehículos y carencia de un embudo directo de consulta.",
            solution: "Sitio web interactivo con portafolio multimedia de alta resolución, filtros por categorías de instalación y canalización contextual de consultas a WhatsApp Business.",
            impact: "Incremento en las solicitudes de cotizaciones digitales de sonido premium y posicionamiento como referente regional del rubro."
          },
          cobranzas: {
            title: "Gestión de Cobranzas — Control de Cuentas Corrientes",
            description: "Software de administración de carteras financieras para la creación de cuentas corrientes de clientes y seguimiento de créditos en cuotas.",
            challenge: "Falta de control centralizado sobre saldos individuales y cuentas corrientes en ventas a crédito, y retrasos en cobranzas debido a la falta de avisos de deuda recurrentes.",
            solution: "Dashboard financiero especializado que permite abrir cuentas corrientes, programar créditos estructurados en cuotas, generar reportes detallados de saldos e implementar notificaciones de estado de deuda.",
            impact: "Reducción significativa de la tasa de morosidad de clientes mayoristas, cobros estructurados a término y control administrativo absoluto de la cartera de crédito."
          },
          crm: {
            title: "CRM Clínico — Especialidad Bariátrica",
            description: "CRM de gestión de salud a medida para clínicas de cirugía bariátrica que centraliza expedientes, recetas médicas, turnos y pedidos de farmacia.",
            challenge: "Falta de integración entre la agenda de turnos, el historial clínico multidisciplinario del paciente bariátrico y la emisión/control de recetas y suplementos indicados.",
            solution: "Software CRM bariátrico a medida con expedientes clínicos detallados, módulo de emisión y control de recetas y turnos específicos, y control de accesos de profesionales de salud.",
            impact: "Centralización del 100% del seguimiento bariátrico pre y post-quirúrgico, reducción de errores en tratamientos y mejora sustancial en la coordinación de pacientes."
          }
        }
      },
      certs: {
        title: "Certificados",
        button: "Click para ver más",
        emitido: "Emitido por"
      },
      contact: {
        title: "Contáctame",
        form: {
          title: "Enviar mensaje",
          name: "Nombre",
          email: "Correo electrónico",
          subject: "Asunto",
          message: "Tu mensaje...",
          sendButton: "Enviar Mensaje",
          sending: "Enviando...",
          success: {
            title: "¡Mensaje enviado!",
            description: "Gracias por contactarte conmigo. Te responderé lo antes posible."
          },
          error: {
            title: "Error",
            description: "No se pudo enviar el mensaje. Por favor, intenta nuevamente."
          }
        },
        info: {
          location: {
            title: "Ubicación",
            content: "San Miguel de Tucumán, Tucumán, Argentina"
          },
          email: {
            title: "Correo Electrónico",
            content: "nicolasalurralde39@gmail.com"
          },
          whatsapp: {
            title: "WhatsApp",
            content: "(+54) 3815507992"
          }
        }
      },
      footer: {
        rights: "Todos los derechos reservados."
      }
    }
  },
  en: {
    translation: {
      hero: {
        badge: "Open for New Projects",
        role: "Web Solutions & Enterprise Systems Developer",
        text: "I design and build custom software that transforms business operations: from internal ERP & CRM systems to payment platforms and interactive digital catalogs. My approach combines high-performance code with intuitive, conversion-focused interfaces.",
        buttoncv: "Download CV",
        ctaProjects: "View Case Studies",
        ctaContact: "Start a Project"
      },
      about: {
        title: "Value Proposition",
        text1: "I specialize in bridging the gap between technical complexity and real business needs. Since 2022, I have built production-ready software solutions that help companies digitize and optimize their day-to-day operations.",
        text2: "My formal technical background as a Programming Technician (UTN FRT) combined with real-world experience allows me to design robust databases, structure efficient APIs, and build interfaces that end-users adopt with ease and zero friction.",
        text3: "I don't just write code. My goal is to deliver software tools that yield a clear return on investment for your business, automating repetitive tasks and freeing up valuable administrative time.",
        stats: {
          years: "Years in Production",
          projects: "Systems Delivered",
          efficiency: "Operational Efficiency",
          efficiencyValue: "100%"
        },
        features: {
          webdev: {
            title: "Web Systems & Apps",
            description: "Admin dashboards, CRM platforms, and financial systems built with React, Next.js, and Node.js."
          },
          design: {
            title: "User Experience",
            description: "Clean, fast, and ultra-intuitive user interfaces with Tailwind CSS designed for productivity."
          },
          optimization: {
            title: "Process Automation",
            description: "Digitization of manual workflows, significantly reducing errors and operational times."
          },
          desktop: {
            title: "Desktop Applications",
            description: "Fast cross-platform desktop software development with Tauri and C# for local enterprise environments."
          }
        }
      },
      tech: {
        title: "Tech Stack",
        cat1: "Programming Languages",
        cat2: "Databases & Storage",
        cat3: "Frameworks & Libraries",
        cat4: "Tools & Deployment"
      },
      projects: {
        title: "Success Stories",
        button1: "Source Code",
        button2: "Live Demo",
        caseStudy: "Case Study",
        tabCase: "Business Case",
        tabTech: "Specs",
        challengeLabel: "The Business Challenge",
        solutionLabel: "Our Technical Solution",
        impactLabel: "Business Impact",
        filterAll: "All Projects",
        filterManagement: "Management & Operations",
        filterWeb: "Websites & Sales Channels",
        projects: {
          alenort: {
            title: "Alenort — Corporate & Sales Portal",
            description: "Premium corporate web presence optimized for a leading poultry distributor, designed to automatically capture and convert wholesale leads.",
            challenge: "The distributor lacked a structured digital channel, limiting regional wholesale lead generation and relying on manual sharing of static PDF files.",
            solution: "Professional website featuring a dynamic product catalog, SEO optimization for target commercial keywords, quick-to-form routing, and a fast CDN setup.",
            impact: "A significant increase in weekly inquiries from new regional wholesale distributors and modernization of their digital sales channel.",
          },
          qr: {
            title: "QR Catalog — E-Commerce & Customer Loyalty",
            description: "Interactive digital catalog with checkout cart, loyalty program with points accumulation, and Uber-style precise GPS location pin.",
            challenge: "Frequent customer typos in delivery addresses and lack of incentives to retain and reward repeat buyers.",
            solution: "Mobile-first e-commerce catalog featuring checkout, integration of an interactive map pointer to resolve precise GPS coordinates, a customer rewards club for points accumulation, and an administrative hub to manage products, sales, and accounts.",
            impact: "100% delivery accuracy utilizing map pointer geolocalisation, elimination of logistical delays, and high customer retention rates driven by the Points Club.",
          },
          recau: {
            title: "Revenue Control — Financial Audit System",
            description: "Internal financial digitization software for logging, balancing, and auditing daily cash flows across multiple retail terminals.",
            challenge: "Manual paper-ledger recording led to typing mistakes, delayed detection of cash discrepancies by days, and frequent loss of deposit receipts.",
            solution: "Unified administrative dashboard with database validation rules, strict per-shift cash count audits, deposit receipt attachments, and an immutable accounting log.",
            impact: "100% elimination of manual calculations, immediate alerts on register discrepancies, and real-time manager visibility over daily financial inflows.",
          },
          asistencia: {
            title: "Geofenced Attendance — HR Control System",
            description: "Mobile-first clock-in system validated via DNI, geofences, and device fingerprinting to prevent attendance fraud.",
            challenge: "Proxy clock-ins (coworkers checking in for each other) and dozens of administrative HR hours spent aggregating manual spreadsheets at month-end.",
            solution: "Mobile check-in app requiring GPS checks within an adjustable geofence (e.g., 100m) and pairing employee DNI to unique device IDs to block multi-fichajes. Includes an HR dashboard and professional Excel exports.",
            impact: "Absolute elimination of proxy clock-in fraud, precise overtime calculations, and reducing payroll processing time by 80%."
          },
          music: {
            title: "MusicCar — Work Showcase & Leads",
            description: "Premium digital portfolio built for an automotive audio and customization workshop, optimized for high-ticket client acquisition.",
            challenge: "Difficulty showcasing the premium engineering behind high-fidelity sound systems online and lack of a direct leads pipeline.",
            solution: "Interactive portfolio layout showcasing high-resolution gallery modules, filters by service categories, and direct contextual redirection to WhatsApp Business.",
            impact: "Boost in digital quote requests for premium sound installations and local brand positioning."
          },
          cobranzas: {
            title: "Collections Manager — Checking Accounts & Credit",
            description: "Installment billing and credit monitoring platform enabling checking accounts creation, installment terms, and debt alerts.",
            challenge: "Lack of central tracking for client credit lines and checking account balances, causing delayed collections due to absence of automated alerts.",
            solution: "Specialized financial dashboard to generate client checking accounts, structure credit plans in installments, track daily balances, and automate overdue notifications.",
            impact: "Significant reduction in delinquent wholesale accounts, structured payment flows, and complete control over credit lines."
          },
          crm: {
            title: "Bariatric CRM — Clinical & Patient Management",
            description: "Custom healthcare CRM designed for bariatric surgery clinics to centralize clinical records, medical prescriptions, patient follow-ups, and pharmacy orders.",
            challenge: "Lack of coordination between appointment schedules, multi-disciplinary pre/post-op records, and the tracking of bariatric recipes and supplement orders.",
            solution: "Bespoke clinical CRM with patient history, medical prescription tracking, integrated appointment flows, and granular medical professional role access controls.",
            impact: "100% centralization of patient data, error reduction in post-op follow-ups, and improved clinic workflow synchronization."
          }
        }
      },
      certs: {
        title: "Certificados",
        button: "Click to see more",
        emitido: "Issued by"
      },
      contact: {
        title: "Contact Me",
        form: {
          title: "Send a message",
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Your message...",
          sendButton: "Send Message",
          sending: "Sending...",
          success: {
            title: "Message Sent!",
            description: "Thanks for reaching out. I’ll get back to you as soon as possible."
          },
          error: {
            title: "Error",
            description: "The message could not be sent. Please try again."
          }
        },
        info: {
          location: {
            title: "Location",
            content: "San Miguel de Tucumán, Tucumán, Argentina"
          },
          email: {
            title: "Email",
            content: "nicolasalurralde39@gmail.com"
          },
          whatsapp: {
            title: "WhatsApp",
            content: "(+54) 3815507992"
          }
        }
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;