"use client"
import React from 'react';
import { Mail, Phone, Globe, Github, Linkedin, Printer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CV_EN() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-8 print:py-0 print:bg-white print:dark:bg-white text-neutral-800">
      
      {/* Action Buttons (Hidden when printing) */}
      <div className="max-w-[21cm] mx-auto mb-6 px-4 flex justify-between items-center print:hidden">
        <Link 
          href="/#home"
          className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* A4 Resume Page */}
      <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white dark:bg-white text-neutral-900 shadow-2xl print:shadow-none p-[1.5cm] md:p-[2cm] print:p-0 flex flex-col justify-between font-sans text-[11px] leading-relaxed">
        
        {/* Header */}
        <div className="text-center space-y-3 pb-4 border-b-2 border-neutral-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Nicolás Alurralde
          </h1>
          <p className="text-sm font-bold text-blue-700 tracking-wider uppercase">
            Full-Stack Developer & Management Solutions Specialist
          </p>
          
          {/* Contact Details */}
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

        {/* Content */}
        <div className="space-y-4 py-4 flex-grow">
          
          {/* Professional Summary */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-neutral-700 text-justify">
              University Degree in Computer Programming (UTN FRT) and Full-Stack Developer specialized in designing, implementing, and deploying business management software (ERP, CRM) and transactional platforms. I possess a unique hybrid profile that combines solid software engineering competencies with hands-on experience in business operations and financial audit control. Focused on building clean, modular, and scalable code that automates operations, reduces overhead, and delivers a clear return on investment (ROI).
            </p>
          </section>

          {/* Professional Experience */}
          <section className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Professional Experience
            </h2>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-neutral-900 text-xs">
                  Full-Stack Developer & Operations Analyst
                </h3>
                <span className="text-neutral-500 font-semibold text-[10px]">2024 — Present</span>
              </div>
              <div className="flex justify-between items-baseline text-neutral-600 font-bold text-[10px]">
                <span>Alenort Distribution</span>
                <span>Tucumán, Argentina</span>
              </div>

              {/* Software Engineering Solutions */}
              <div className="space-y-1 mt-1">
                <h4 className="font-bold text-neutral-800 text-[10px] uppercase tracking-wider">
                  Software Engineering & Process Automation:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-neutral-700">
                  <li>
                    <strong>Geofenced Attendance System:</strong> Engineered a mobile clock-in app requiring GPS checks within an adjustable geofence (100m radius) and pairing employee DNI with device fingerprinting to prevent check-in fraud. Built an HR dashboard that <strong>reduced monthly payroll calculation time by 80%</strong>.
                  </li>
                  <li>
                    <strong>Revenue Control System:</strong> Designed and implemented an internal web platform to audit cash-drawer balances across multiple sales terminals, replacing manual paper logging and <strong>eliminating 100% of data-entry errors</strong> and cash discrepancies.
                  </li>
                  <li>
                    <strong>QR Digital Catalog:</strong> Developed a self-managed mobile catalog with checkout featuring interactive Uber-style map GPS coordinates (achieving 100% address accuracy for delivery shipments) and a customer loyalty points club.
                  </li>
                  <li>
                    <strong>Corporate Website:</strong> Designed and deployed the official wholesale corporate website (<a href="https://www.alenort.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-medium">alenort.com</a>) optimized for SEO and speed, significantly increasing weekly wholesale customer inquiries.
                  </li>
                </ul>
              </div>

              {/* Administrative Operations */}
              <div className="space-y-1 mt-2">
                <h4 className="font-bold text-neutral-800 text-[10px] uppercase tracking-wider">
                  Business Operations & Financial Control:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-neutral-700">
                  <li>
                    Audited customer accounts receivable, reconciled checking accounts, and managed high-volume bank deposits and commercial checks.
                  </li>
                  <li>
                    Managed physical stock databases, reconciled inventory logs, and automated product pricing updates.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Featured Projects (Success Stories)
            </h2>

            <div className="space-y-1.5">
              <div>
                <h3 className="font-bold text-neutral-900 text-xs">
                  Clinical Bariatric CRM (Healthcare SaaS)
                </h3>
                <p className="text-neutral-500 text-[9px] font-semibold">React, TypeScript, Tailwind CSS, Vercel</p>
              </div>
              <p className="text-neutral-700 text-justify">
                Developed a custom healthcare CRM for a bariatric surgery clinic, focusing on pre- and post-operative patient tracking. Integrated dynamic clinical records, bariatric prescription and supplement order tracking, dynamic doctor scheduling calendar, and patient pharmacy order control.
              </p>
            </div>

            <div className="space-y-1.5 mt-2">
              <div>
                <h3 className="font-bold text-neutral-900 text-xs">
                  Collections & Credit Manager (Fintech Dashboard)
                </h3>
                <p className="text-neutral-500 text-[9px] font-semibold">React, TypeScript, Tailwind CSS, Vercel</p>
              </div>
              <p className="text-neutral-700 text-justify">
                Created a financial platform to manage client checking accounts and coordinate installment-based credit terms. Features visual credit risk scoring per client, daily collection reports, and automatic overdue notifications to reduce company delinquency rates.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-neutral-700">
              <p><strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap</p>
              <p><strong>Backend & APIs:</strong> Node.js, Express, REST APIs, C# (.NET), PHP</p>
              <p><strong>Databases:</strong> MongoDB, MySQL, Firebase, Supabase (PostgreSQL)</p>
              <p><strong>Desktop Apps:</strong> Tauri (Rust/HTML/JS), Windows Forms (C#)</p>
              <p><strong>Tools & DevOps:</strong> Git, GitHub, Vercel, Netlify, Postman, Figma, Excel</p>
              <p><strong>Languages:</strong> Spanish (Native), English (Intermediate B2)</p>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-neutral-900 text-xs">
                  Associate Degree in Computer Programming
                </h3>
                <p className="text-neutral-600 font-medium">Universidad Tecnológica Nacional - Facultad Regional Tucumán</p>
              </div>
              <span className="text-neutral-500 font-semibold text-[10px]">2023 — 2024</span>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-neutral-400 text-[8px] border-t border-neutral-200 pt-2 print:pt-4">
          Nicolás Alurralde · Full-Stack Developer · Curriculum Vitae
        </div>

      </div>
    </div>
  );
}
