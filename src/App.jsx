import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Globe, Github, Linkedin, Mail, Download, 
  ExternalLink, Code2, Briefcase, GraduationCap, Send, 
  CheckCircle2, Sparkles, User, Layers, ArrowUpRight 
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('fa'); // 'fa' | 'en'
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSent, setFormSent] = useState(false);

  // هماهنگ‌سازی جهت صفحه با زبان
  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // استایل‌های نئومورفیک برای لایت و دارک
  const neuStyles = {
    convex: darkMode
      ? {
          background: '#1a1e24',
          boxShadow: '8px 8px 16px #121519, -8px -8px 16px #22272f'
        }
      : {
          background: '#e6ecf5',
          boxShadow: '8px 8px 18px #c2c9d2, -8px -8px 18px #ffffff'
        },
    convexSm: darkMode
      ? {
          background: '#1a1e24',
          boxShadow: '4px 4px 10px #121519, -4px -4px 10px #22272f'
        }
      : {
          background: '#e6ecf5',
          boxShadow: '4px 4px 10px #c2c9d2, -4px -4px 10px #ffffff'
        },
    inset: darkMode
      ? {
          background: '#171a20',
          boxShadow: 'inset 4px 4px 8px #101217, inset -4px -4px 8px #1e2229'
        }
      : {
          background: '#dde3ec',
          boxShadow: 'inset 4px 4px 8px #c4cbd5, inset -4px -4px 8px #f6fbff'
        },
    pressed: darkMode
      ? {
          background: '#181b21',
          boxShadow: 'inset 2px 2px 5px #111418, inset -2px -2px 5px #20242b',
          color: '#60a5fa'
        }
      : {
          background: '#dde3ec',
          boxShadow: 'inset 2px 2px 5px #c2c9d2, inset -2px -2px 5px #ffffff',
          color: '#2563eb'
        }
  };

  const t = {
    fa: {
      name: "محمد",
      role: "توسعه‌دهنده فرانت‌اند و طراح رابط کاربری",
      bio: "علاقه‌مند به ساخت تجربه‌های وب مدرن با ترکیب زیبایی‌شناسی نئومورفیسم، کارایی بالا و کدهای تمیز.",
      downloadCV: "دانلود رزومه",
      contactMe: "ارتباط با من",
      skills: "مهارت‌های فنی",
      projects: "پروژه‌ها",
      experience: "سوابق و تجربیات",
      contact: "ارسال پیام",
      all: "همه",
      preview: "مشاهده جزئیات",
      sendBtn: "ارسال پیام",
      msgSent: "پیام شما با موفقیت ثبت شد!",
      available: "آماده برای همکاری در پروژه‌های جدید"
    },
    en: {
      name: "Mohammad",
      role: "Frontend Developer & UI/UX Designer",
      bio: "Passionate about crafting tactile web experiences blending Neumorphic aesthetics, peak performance, and clean code.",
      downloadCV: "Download CV",
      contactMe: "Get in Touch",
      skills: "Technical Skills",
      projects: "Featured Projects",
      experience: "Work & Education",
      contact: "Contact Me",
      all: "All",
      preview: "View Details",
      sendBtn: "Send Message",
      msgSent: "Message successfully recorded!",
      available: "Available for new projects & opportunities"
    }
  }[lang];

  const skills = [
    { name: "React / Next.js", level: 92, cat: "frontend" },
    { name: "JavaScript / TypeScript", level: 88, cat: "frontend" },
    { name: "Tailwind CSS / Neumorphism", level: 95, cat: "design" },
    { name: "Git / GitHub Workflow", level: 85, cat: "tools" },
    { name: "UI/UX & Figma", level: 80, cat: "design" },
    { name: "REST APIs & State Management", level: 86, cat: "frontend" }
  ];

  const projects = [
    {
      id: 1,
      title: lang === 'fa' ? "داشبورد مالی Soft UI" : "Neumorphic Crypto & Finance Dashboard",
      desc: lang === 'fa' ? "پنل مدیریت دارایی‌های دیجیتال با المان‌های برجسته و انیمیشن‌های روان." : "Tactile digital asset manager with soft cards and real-time updates.",
      tags: ["React", "Tailwind", "Soft UI"],
      cat: "web"
    },
    {
      id: 2,
      title: lang === 'fa' ? "پلتفرم ابری Task Flow" : "Minimalist Task Flow",
      desc: lang === 'fa' ? "سیستم مدیریت تسک تیمی با قابلیت درگ‌اند-دراپ و گزارش‌گیری پیشرفته." : "Collaborative task manager featuring soft inset dropzones and live tracking.",
      tags: ["Next.js", "Zustand", "TypeScript"],
      cat: "app"
    },
    {
      id: 3,
      title: lang === 'fa' ? "کامپوننت‌های نئومورفیک React" : "React Neumorphic Kit",
      desc: lang === 'fa' ? "مجموعه کامپوننت‌های در دسترس و بازمتن با تمرکز روی میکرواینترکشن‌ها." : "Open-source accessible UI library implementing tactile dual-shadow paradigms.",
      tags: ["React", "CSS Modules", "NPM"],
      cat: "lib"
    }
  ];

  const timeline = [
    {
      year: "2024 - اکنون",
      title: lang === 'fa' ? "توسعه‌دهنده ارشد فرانت‌اند" : "Senior Frontend Developer",
      subtitle: lang === 'fa' ? "تیم محصول / ریموت" : "Product Team / Remote",
      desc: lang === 'fa' ? "طراحی و توسعه معماری فرانت‌اند اپلیکیشن‌های تحت وب با ری‌اکت و تیلویند." : "Spearheading modern component design systems and web performance optimization."
    },
    {
      year: "2022 - 2024",
      title: lang === 'fa' ? "توسعه‌دهنده وب و UI" : "Web & UI Developer",
      subtitle: lang === 'fa' ? "استودیو نرم‌افزار" : "Software Studio",
      desc: lang === 'fa' ? "پیاده‌سازی رابط‌های کاربری مدرن، ریسپانسیو و بهینه‌سازی تجربه کاربر." : "Implemented high-fidelity design systems and responsive user interfaces."
    }
  ];

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-8 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-5xl mx-auto space-y-14">
        
        {/* نوار بالایی و تنظیمات (Header Bar) */}
        <header className="flex justify-between items-center p-4 rounded-2xl transition-all" style={neuStyles.convex}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg text-blue-500" style={neuStyles.inset}>
              M
            </div>
            <span className="font-extrabold text-lg tracking-tight">{t.name}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* دکمه زبان */}
            <button
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="p-3 rounded-xl flex items-center gap-1.5 text-sm font-semibold transition active:scale-95"
              style={neuStyles.convexSm}
              title="تغییر زبان"
            >
              <Globe size={18} className="text-blue-500" />
              <span>{lang === 'fa' ? 'EN' : 'فا'}</span>
            </button>

            {/* دکمه تم لایت / دارک */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl transition active:scale-95 text-amber-500 dark:text-blue-400"
              style={neuStyles.convexSm}
              title="تغییر تم"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
          </div>
        </header>

        {/* بخش معرفی (Hero Section) */}
        <section className="p-8 sm:p-12 rounded-3xl transition-all" style={neuStyles.convex}>
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-5 text-center md:text-start flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400" style={neuStyles.inset}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {t.available}
              </div>
              <h1 className="text-3xl sm:text-5xl font-black leading-tight">
                {t.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400">
                {t.role}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                {t.bio}
              </p>

              {/* اکشن‌ها و شبکه‌های اجتماعی */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl font-bold text-sm text-blue-600 dark:text-blue-400 transition active:scale-95 flex items-center gap-2"
                  style={neuStyles.convexSm}
                >
                  <Send size={16} />
                  {t.contactMe}
                </a>
                <button
                  onClick={() => alert('لینک رزومه فایل PDF را اینجا قرار دهید.')}
                  className="px-6 py-3 rounded-2xl font-bold text-sm transition active:scale-95 flex items-center gap-2"
                  style={neuStyles.convexSm}
                >
                  <Download size={16} />
                  {t.downloadCV}
                </button>
                <div className="flex items-center gap-2">
                  <a href="https://github.com/mamadixm" target="_blank" rel="noreferrer" className="p-3 rounded-xl transition" style={neuStyles.convexSm}>
                    <Github size={18} />
                  </a>
                  <a href="mailto:your-email@example.com" className="p-3 rounded-xl transition" style={neuStyles.convexSm}>
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* آواتار نئومورفیک */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-4 flex items-center justify-center transition-all" style={neuStyles.convex}>
              <div className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-4" style={neuStyles.inset}>
                <Sparkles size={40} className="text-blue-500 mb-2 animate-bounce" />
                <span className="font-bold text-xs uppercase tracking-wider text-slate-500">Soft UI Portfolio</span>
              </div>
            </div>
          </div>
        </section>

        {/* مهارت‌ها (Skills Section) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl text-blue-500" style={neuStyles.convexSm}>
              <Code2 size={20} />
            </div>
            <h2 className="text-2xl font-bold">{t.skills}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-5 rounded-2xl space-y-3" style={neuStyles.convex}>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}%</span>
                </div>
                {/* پروگرس بار فرورفته */}
                <div className="w-full h-3 rounded-full overflow-hidden p-0.5" style={neuStyles.inset}>
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* پروژه‌ها (Projects Section) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl text-blue-500" style={neuStyles.convexSm}>
              <Layers size={20} />
            </div>
            <h2 className="text-2xl font-bold">{t.projects}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="p-6 rounded-3xl flex flex-col justify-between space-y-4" style={neuStyles.convex}>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500" style={neuStyles.inset}>
                    <Code2 size={22} />
                  </div>
                  <h3 className="text-lg font-bold">{proj.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{proj.desc}</p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-lg font-medium" style={neuStyles.inset}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1.5 transition active:scale-95"
                    style={neuStyles.convexSm}
                  >
                    <span>{t.preview}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* سوابق و خط زمان (Timeline) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl text-blue-500" style={neuStyles.convexSm}>
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-bold">{t.experience}</h2>
          </div>

          <div className="p-8 rounded-3xl space-y-8" style={neuStyles.convex}>
            {timeline.map((item, idx) => (
              <div key={idx} className="relative ps-6 border-s-2 border-slate-300 dark:border-slate-700 space-y-1">
                <div className="absolute -start-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-md"></div>
                <span className="text-xs font-bold text-blue-500 uppercase">{item.year}</span>
                <h4 className="text-base font-bold">{item.title}</h4>
                <div className="text-xs font-semibold text-slate-400">{item.subtitle}</div>
                <p className="text-sm text-slate-500 pt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* فرم ارتباط با من (Contact Section) */}
        <section id="contact" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl text-blue-500" style={neuStyles.convexSm}>
              <Mail size={20} />
            </div>
            <h2 className="text-2xl font-bold">{t.contact}</h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl" style={neuStyles.convex}>
            {formSent ? (
              <div className="p-6 rounded-2xl flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-sm" style={neuStyles.inset}>
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
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder={lang === 'fa' ? "نام شما" : "Your Name"}
                    className="w-full p-4 rounded-2xl text-sm outline-none bg-transparent transition"
                    style={neuStyles.inset}
                  />
                  <input
                    type="email"
                    required
                    placeholder={lang === 'fa' ? "ایمیل شما" : "Your Email"}
                    className="w-full p-4 rounded-2xl text-sm outline-none bg-transparent transition"
                    style={neuStyles.inset}
                  />
                </div>
                <textarea
                  rows="4"
                  required
                  placeholder={lang === 'fa' ? "متن پیام..." : "Your Message..."}
                  className="w-full p-4 rounded-2xl text-sm outline-none bg-transparent transition resize-none"
                  style={neuStyles.inset}
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl font-bold text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2 transition active:scale-95"
                  style={neuStyles.convexSm}
                >
                  <Send size={16} />
                  <span>{t.sendBtn}</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* فوتر */}
        <footer className="text-center py-6 text-xs text-slate-500">
          Designed & Built with Soft UI Neumorphism • {new Date().getFullYear()}
        </footer>

      </div>

      {/* مودال جزئیات پروژه */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full p-8 rounded-3xl space-y-4 animate-in fade-in zoom-in duration-200" style={neuStyles.convex}>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-400"
                style={neuStyles.convexSm}
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {selectedProject.desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg font-semibold" style={neuStyles.inset}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 flex gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex-1 py-2.5 rounded-xl font-bold text-xs"
                style={neuStyles.convexSm}
              >
                {lang === 'fa' ? 'بستن' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}