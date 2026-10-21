import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Globe, Mail, Download, 
  Code2, Briefcase, Send, CheckCircle2, 
  Layers, ArrowUpRight, X, Cpu, Bot
} from 'lucide-react';
import './App.css';
import profileImg from './assets/profile.jpg';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('fa');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = {
    fa: {
      name: "محمدمهدی فراهانی",
      role: "توسعه‌دهنده فول‌استک (Full-Stack Developer)",
      bio: "علاقه‌مند و فعال در حوزه‌های رباتیک، هوش مصنوعی و اتوماسیون صنعتی. تمرکز روی ساخت سیستم‌های نرم‌افزاری هوشمند، تعاملات مدرن وب و معماری مقیاس‌پذیر.",
      downloadCV: "دانلود رزومه",
      contactMe: "ارتباط با من",
      skills: "مهارت‌های تخصصی",
      projects: "پروژه‌های منتخب",
      experience: "سوابق و حوزه‌های فعالیت",
      contact: "ارسال پیام",
      preview: "مشاهده جزئیات",
      sendBtn: "ارسال پیام",
      msgSent: "پیام شما دریافت شد! به زودی پاسخ می‌دهم.",
      available: "آماده برای پروژه‌های هوش مصنوعی و توسعه نرم‌افزار",
      namePlaceholder: "نام شما",
      emailPlaceholder: "ایمیل شما",
      msgPlaceholder: "متن پیام شما...",
      close: "بستن",
    },
    en: {
      name: "Mohammad Mehdi Farahani",
      role: "Full-Stack Developer",
      bio: "Passionate about Robotics, Artificial Intelligence, and Industrial Automation. Specializing in intelligent software systems, modern web architectures, and scalable full-stack applications.",
      downloadCV: "Download CV",
      contactMe: "Get in Touch",
      skills: "Core Expertise",
      projects: "Featured Works",
      experience: "Experience & Focus",
      contact: "Drop a Message",
      preview: "View Details",
      sendBtn: "Send Message",
      msgSent: "Message recorded! I will reply soon.",
      available: "Available for AI & Software Projects",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      msgPlaceholder: "Your Message...",
      close: "Close",
    }
  }[lang];

  const skills = [
    { name: "Full-Stack Development (React, Node.js, Python)", level: 92 },
    { name: "Artificial Intelligence & Machine Learning", level: 86 },
    { name: "Robotics & Hardware Integration", level: 84 },
    { name: "Industrial Automation Systems", level: 80 },
    { name: "API Architecture & Databases (SQL/NoSQL)", level: 88 },
    { name: "UI/UX & Neumorphic Design", level: 90 },
  ];

  const projects = [
    {
      id: 1,
      title: lang === 'fa' ? "سیستم نظارت و اتوماسیون هوشمند" : "Smart Automation Monitoring Platform",
      desc: lang === 'fa' ? "پلتفرم جمع‌آوری داده‌های سنسورها و کنترل تجهیزات صنعتی با داشبورد تعاملی تحت وب و تحلیل داده." : "Industrial telemetry and automation dashboard monitoring sensor data in real-time.",
      tags: ["Python", "React", "Automation", "IoT"],
    },
    {
      id: 2,
      title: lang === 'fa' ? "موتور پردازش داده و بینایی ماشین رباتیک" : "Robotics Vision & Control Pipeline",
      desc: lang === 'fa' ? "پیاده‌سازی پایپ‌لاین تشخیص اشیاء و کنترل موقعیت برای بازوهای رباتیک با هوش مصنوعی." : "Computer vision pipeline for robotic manipulation, object tracking, and spatial kinematics.",
      tags: ["AI / ML", "Computer Vision", "Robotics"],
    },
    {
      id: 3,
      title: lang === 'fa' ? "داشبورد نئومورفیک تحت وب" : "Neumorphic Control Center",
      desc: lang === 'fa' ? "رابط کاربری نرم و مدرن برای مدیریت لاگ‌ها و دستورات رباتیک با تجربه کاربری تعاملی." : "Tactile Soft UI web application for real-time robotic telemetry and command dispatching.",
      tags: ["Full-Stack", "Soft UI", "WebSocket"],
    }
  ];

  const timeline = [
    {
      year: "2024 - اکنون",
      title: lang === 'fa' ? "توسعه‌دهنده نرم‌افزار و هوش مصنوعی" : "Software & AI Developer",
      company: lang === 'fa' ? "پروژه‌های اتوماسیون و رباتیک" : "Automation & Robotics Projects",
      desc: lang === 'fa' ? "توسعه سیستم‌های نرم‌افزاری متصل به کنترلرها و پیاده‌سازی سرویس‌های هوش مصنوعی." : "Architecting software interfaces for industrial hardware and intelligent data systems."
    },
    {
      year: "2022 - 2024",
      title: lang === 'fa' ? "توسعه‌دهنده فول‌استک و وب" : "Full-Stack & Web Developer",
      company: lang === 'fa' ? "طراحی و مهندسی سیستم‌ها" : "Systems Engineering & Web",
      desc: lang === 'fa' ? "پیاده‌سازی سامانه‌های تحت وب با معماری ماژولار و رابط‌های کاربری تعاملی." : "Building responsive web platforms, backend APIs, and tactile user experiences."
    }
  ];

  return (
    <div className={`portfolio-container ${darkMode ? 'dark' : ''}`}>
      <div className="portfolio-wrapper">
        
        {/* Navigation Bar */}
        <header className="neu-convex header-bar">
          <div className="header-brand">
            <div className="neu-inset header-avatar">
              MF
            </div>
            <span className="header-title">{t.name}</span>
          </div>

          <div className="header-actions">
            <button 
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="neu-convex-sm btn-lang"
            >
              <Globe size={16} color="var(--accent-color)" />
              <span>{lang === 'fa' ? 'EN' : 'فا'}</span>
            </button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="neu-convex-sm btn-theme"
            >
              {darkMode ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#3b82f6" />}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="neu-convex hero-section">
          <div className="hero-info">
            <div className="neu-inset badge-available">
              <span className="status-dot"></span>
              {t.available}
            </div>
            <h1 className="hero-title">{t.name}</h1>
            <p className="hero-role">{t.role}</p>
            <p className="hero-bio">{t.bio}</p>

            <div className="hero-actions">
              <a href="#contact" className="neu-convex-sm btn-action btn-primary">
                <Send size={16} />
                {t.contactMe}
              </a>
              <button 
                onClick={() => alert('Download link for CV goes here.')}
                className="neu-convex-sm btn-action"
              >
                <Download size={16} />
                {t.downloadCV}
              </button>
              <a 
                href="https://github.com/mamadixm" 
                target="_blank" 
                rel="noreferrer"
                title="GitHub"
                className="neu-convex-sm btn-icon"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Picture with Circular Neumorphic Frame */}
          <div className="neu-convex profile-frame-outer">
            <div className="neu-inset profile-frame-inner">
              <img 
                src={profileImg} 
                alt="Mohammad Mehdi Farahani" 
                className="profile-img"
              />
            </div>
            <div className="profile-live-indicator" title="Active & Available" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-wrapper">
          <div className="section-header">
            <div className="neu-convex-sm section-icon-box">
              <Cpu size={20} color="var(--accent-color)" />
            </div>
            <h2 className="section-title">{t.skills}</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="neu-convex skill-card">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="neu-inset progress-track">
                  <div 
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-wrapper">
          <div className="section-header">
            <div className="neu-convex-sm section-icon-box">
              <Bot size={20} color="var(--accent-color)" />
            </div>
            <h2 className="section-title">{t.projects}</h2>
          </div>

          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="neu-convex project-card">
                <div>
                  <div className="neu-inset project-icon-box">
                    <Code2 size={20} />
                  </div>
                  <h3 className="project-name" style={{ marginTop: 12 }}>{proj.title}</h3>
                  <p className="project-desc" style={{ marginTop: 8 }}>{proj.desc}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="project-tags">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="neu-inset project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(proj)}
                    className="neu-convex-sm btn-project-preview"
                  >
                    <span>{t.preview}</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section-wrapper">
          <div className="section-header">
            <div className="neu-convex-sm section-icon-box">
              <Briefcase size={20} color="var(--accent-color)" />
            </div>
            <h2 className="section-title">{t.experience}</h2>
          </div>

          <div className="neu-convex timeline-card">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="section-wrapper">
          <div className="section-header">
            <div className="neu-convex-sm section-icon-box">
              <Mail size={20} color="var(--accent-color)" />
            </div>
            <h2 className="section-title">{t.contact}</h2>
          </div>

          <div className="neu-convex contact-card">
            {formSent ? (
              <div className="neu-inset contact-success">
                <CheckCircle2 size={24} />
                <span>{t.msgSent}</span>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSent(true);
                  setTimeout(() => setFormSent(false), 5000);
                }}
                className="contact-form"
              >
                <div className="contact-row">
                  <input 
                    type="text" 
                    required 
                    placeholder={t.namePlaceholder}
                    className="neu-inset form-input"
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder={t.emailPlaceholder}
                    className="neu-inset form-input"
                  />
                </div>
                <textarea 
                  rows={4} 
                  required 
                  placeholder={t.msgPlaceholder}
                  className="neu-inset form-textarea"
                />
                <button 
                  type="submit"
                  className="neu-convex-sm btn-submit"
                >
                  <Send size={16} />
                  <span>{t.sendBtn}</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="portfolio-footer">
          Designed with Neumorphism Soft UI • {new Date().getFullYear()}
        </footer>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="neu-convex modal-box">
            <div className="modal-header">
              <h3 style={{ fontSize: 18, fontWeight: 800 }}>{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="neu-convex-sm btn-close-modal"
              >
                <X size={16} />
              </button>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8 }}>
              {selectedProject.desc}
            </p>
            <div className="project-tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="neu-inset project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <button 
              onClick={() => setSelectedProject(null)}
              className="neu-convex-sm modal-btn-action"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}