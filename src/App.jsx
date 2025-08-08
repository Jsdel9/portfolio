import { useState } from "react";
import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ===== Quick-edit content =====
const SITE = {
  name: "Josh Sidel",
  role: "Applied Data Analytics · AI minor",
  location: "Syracuse, NY",
  email: "you@example.com",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle/",
  },
  summary:
    "Sophomore at Syracuse. I like building small tools that turn messy data into simple answers. Comfortable in Python, SQL, and shipping quick demos.",
  projects: [
    {
      title: "NEXIS · Stock Sentiment",
      description:
        "Reads headlines, scores sentiment, and suggests buy/sell/hold. Built to test if news tone explains short-term moves.",
      tech: ["Python", "Pandas", "scikit-learn"],
      link: "#",
    },
    {
      title: "Well-being Check-in",
      description:
        "Fast mood journal with prompts and sticker-style tags. Goal is daily reflection with zero friction.",
      tech: ["React", "Vite", "Firebase"],
      link: "#",
    },
    {
      title: "AI Job Market Explorer",
      description:
        "Filters AI roles, compares salaries, and charts trends by title and location.",
      tech: ["SQL", "Tableau", "Python"],
      link: "#",
    },
  ],
  skills: [
    "Python",
    "Pandas",
    "SQL",
    "scikit-learn",
    "Git",
    "React",
    "Tableau",
    "Excel",
  ],
  headshot:
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
};


export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{SITE.name}</a>
          <button
            className="md:hidden px-3 py-2 rounded-lg border border-slate-300"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a className="hover:text-orange-600" href="#about">About</a></li>
            <li><a className="hover:text-orange-600" href="#projects">Projects</a></li>
            <li><a className="hover:text-orange-600" href="#skills">Skills</a></li>
            <li><a className="hover:text-orange-600" href="#contact">Contact</a></li>
          </ul>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <ul className="mx-auto max-w-6xl px-4 py-2 grid gap-2 text-sm">
              <li><a onClick={() => setMenuOpen(false)} className="block py-2" href="#about">About</a></li>
              <li><a onClick={() => setMenuOpen(false)} className="block py-2" href="#projects">Projects</a></li>
              <li><a onClick={() => setMenuOpen(false)} className="block py-2" href="#skills">Skills</a></li>
              <li><a onClick={() => setMenuOpen(false)} className="block py-2" href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-widest text-slate-500">{SITE.location}</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            {SITE.name}
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl text-slate-600">{SITE.role}</h2>
          <p className="mt-5 max-w-prose leading-relaxed">
            {SITE.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-orange-200 bg-orange-50 hover:bg-orange-100">
              See projects <ArrowRight size={16} />
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-slate-300 hover:bg-white">
              <Mail size={16} /> Email me
            </a>
            {SITE.socials.github && (
              <a href={SITE.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-slate-300 hover:bg-white">
                <Github size={16} /> GitHub
              </a>
            )}
            {SITE.socials.linkedin && (
              <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-slate-300 hover:bg-white">
                <Linkedin size={16} /> LinkedIn
              </a>
            )}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex justify-center">
          <img
            src={SITE.headshot}
            alt={`${SITE.name} headshot`}
            className="w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl font-semibold">About</h3>
        <p className="mt-4 max-w-3xl leading-relaxed">
          Write a short, human paragraph that sounds like you. Mention what you study or do,
          the kind of problems you enjoy, and what you want next. Keep it simple, specific,
          and friendly.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {SITE.projects.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-slate-200 px-2 py-1">{t}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-orange-600"
                >
                  View <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {SITE.skills.map((s) => (
            <span key={s} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-sm shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Want to collaborate or just say hi? Send me an email. I read every message.
          </p>
          <div className="mt-5">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-orange-300 bg-orange-50 hover:bg-orange-100"
            >
              <Mail size={18} /> {SITE.email}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-16 pt-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {SITE.name}. Built with React + Tailwind.</p>
      </footer>
    </div>
  );
}
