// src/lib/i18n.ts
'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      hero: {
        badge:"Open to Work",
        text:"🎓 Técnico Programador Universitario (UTN FRT), 23 años, de Tucumán, Argentina. Apasionado por la tecnología y el desarrollo de software. Busco participar en proyectos innovadores que me desafíen y me permitan seguir creciendo mientras aporto soluciones creativas y efectivas.",
        buttoncv:"Descargar CV"
      },
      about: {
        title:"Sobre mí",
        text1: "Mi pasión por la programación comenzó en 2022, cuando ingresé a la carrera de Ingeniería en Sistemas. Allí descubrí que mi verdadera vocación estaba en el desarrollo de software. En 2023 decidí orientar mi formación hacia lo que realmente me apasiona y comencé la Tecnicatura en Programación, la cual finalicé a fines de 2024 con un excelente desempeño académico.",
        text2:"Siento que el aprendizaje es un camino que nunca se termina. Programar, para mí, es mucho más que escribir código: es una forma de superarme, de buscar la mejor versión de mí en cada desafío. Me llena encontrar soluciones simples a problemas difíciles.",
        text3:"Cuento con un ingles basico pero en aprendizaje",
        features: {
          webdev: {
            title: "Desarrollo Web Full-Stack",
            description: "Desarrollo de aplicaciones web modernas y escalables."
          },
          design: {
            title: "UI/UX Design",
            description: "Diseño de interfaces de usuario elegantes y funcionales utilizando Tailwind CSS."
          },
          optimization: {
            title: "Optimización",
            description: "Optimización del rendimiento de aplicaciones web tanto estáticas como dinámicas."
          },
          desktop: {
            title: "Apps de Escritorio",
            description: "Creación de aplicaciones de escritorio multiplataforma robustas y eficientes."
          }
        }
      },
      tech: {
        title:"Tecnologías",
        cat1:"Lenguajes",
        cat2:"Bases de Datos",
        cat3:"Frameworks y Librerías",
        cat4:"Herramientas"
      },
      projects: {
        title: "Proyectos",
        button1: "Código",
        button2: "Demo",
        projects: {
          alenort: {
            title: "Pagina Web Alenort",
            description: "Desarrollada para Alenort, con el objetivo de ampliar e impulsar sus ventas, brindando atraves de la pagina web mayor informacion y profesionalismo a sus clientes"
          },
          qr: {
            title: "Catalogo qr",
            description: "Brindando atraves de un codigo qr que esta en el salon y en los vehiculos de la empresa para que la gente escaneando acceda al catalogo completo de alenort"
          },
          recau: {
            title: "Sistema para llevar el control de las recaudaciones diarias",
            description: "Con el Objectivo de llevar un mejor control de ingresos de la empresa de los diferentes puntos de cajas que tiene"
          }, 
          asistencia: {
            title: "Sistema para llevar el control de asistencia de los empleado",
            description: "Con el objectivo de simplificar procesos a la hora de pagar sueldos y llevar un mejor control"
          },
          music: {
            title: "Pagina web MusicCar",
            description: "Desarrollada para una empresa con el objectivo de impulsar ventas y profesionalismo"
          },
          cobranzas: {
            title: "Sistema de cobranzas",
            description: "Sistema desarrollado para gestionar y optimizar las cobranzas, facilitando el seguimiento de pagos y mejorando la eficiencia administrativa."
          }
        }
      },
      certs: {
        title:"Certificados",
        button:"Click para ver más",
        emitido:"Emitido por"
      },
      contact: {
        title: "Contáctame",
        form: {
          title: "Contacto",
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
      }
    }
  },
  en: {
    translation: {
      hero: {
        badge: "Open to Work",
        text: "🎓 University Programming Technician (UTN FRT), 22 years old, from Tucumán, Argentina. Passionate about technology and software development. I'm looking to participate in innovative projects that challenge me and allow me to keep growing while contributing creative and effective solutions.",
        buttoncv: "Download CV"
      },
      about: {
        title: "About Me",
        text1: "My passion for programming began in 2022 when I started studying systems engineering. I realized that coding was my true calling, and in 2023, I enrolled in the programming technician program, which I completed in late 2024 with top grades.",
        text2: "I believe learning is a never-ending journey. For me, programming is more than writing code—it's a way to challenge myself and strive to be the best version of myself in every project. I love finding simple solutions to complex problems.",
        text3: "I have basic English skills but I'm actively learning.",
        features: {
          webdev: {
            title: "Full-Stack Web Development",
            description: "Development of modern and scalable web applications."
          },
          design: {
            title: "UI/UX Design",
            description: "Design of elegant and functional user interfaces using Tailwind CSS."
          },
          optimization: {
            title: "Optimization",
            description: "Performance optimization of both static and dynamic web applications."
          },
          desktop: {
            title: "Desktop Apps",
            description: "Creation of robust and efficient cross-platform desktop applications."
          }
        }
      },
      tech: {
        title: "Technologies",
        cat1: "Languages",
        cat2: "Databases",
        cat3: "Frameworks and Libraries",
        cat4: "Tools"
      },
      projects: {
        title: "Projects",
        button1: "Code",
        button2: "Demo",
        projects: {
          alenort: {
            title: "Alenort Website",
            description: "Developed for Alenort to expand and boost its sales, offering more information and professionalism to its clients through the website."
          },
          qr: {
            title: "QR Catalog",
            description: "Accessible via a QR code placed in the showroom and vehicles, allowing people to scan and access Alenort's complete catalog."
          },
          recau: {
            title: "Daily Revenue Control System",
            description: "Designed to better manage the company's income from different cash register points."
          },
          asistencia: {
            title: "Employee Attendance System",
            description: "Aimed at simplifying payroll processes and improving attendance tracking."
          },
          music: {
            title: "MusicCar Website",
            description: "Developed for a company to boost sales and professionalism."
          }
        }
      },
      certs: {
        title: "Certificates",
        button: "Click to see more",
        emitido: "Issued by"
      },
      contact: {
        title: "Contact Me",
        form: {
          title: "Contact",
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