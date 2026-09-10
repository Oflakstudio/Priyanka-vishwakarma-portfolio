import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { projects } from './data/projects'
import './styles.css'

const navItems = [
  ['Work', '#work'],
  ['Research', '#research'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

function Visual({ label, variant = '' }) {
  return (
    <div className={`visual-field ${variant}`} aria-label={label} role="img">
      <div className="visual-grid" />
      <div className="visual-mark">{label}</div>
      <div className="visual-note">IMAGE PLACEHOLDER</div>
    </div>
  )
}

function Header({ open, setOpen }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Priyanka Vishwakarma home">PV<span>/</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([name, href], i) => <a key={href} href={href}><span>0{i + 1}</span>{name}</a>)}
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
      </button>
      {open && <div className="mobile-menu">{navItems.map(([name, href], i) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{name}</a>)}</div>}
    </header>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a href={`#${project.id}`} className="project-link">
        <Visual label={project.index} variant={project.accent} />
        <div className="project-meta">
          <div>
            <span className="eyebrow">{project.index} / {project.category}</span>
            <h3>{project.title}</h3>
          </div>
          <div className="project-year">{project.year}<ArrowUpRight size={17} strokeWidth={1.4} /></div>
        </div>
      </a>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="top" className="app-shell">
      <Header open={menuOpen} setOpen={setMenuOpen} />

      <main>
        <section className="hero section-frame">
          <div className="hero-kicker"><span>Fashion Design Portfolio</span><span>India · 2026</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Emerging designer / Visual research / Garment</p>
              <h1>Priyanka<br /><em>Vishwakarma</em></h1>
              <p className="hero-intro">A practice shaped by observation, material exploration, silhouette and the quiet intelligence of making.</p>
              <a className="text-link" href="#work">Explore selected work <ArrowUpRight size={16} strokeWidth={1.4} /></a>
            </div>
            <Visual label="PV / 01" variant="hero-visual" />
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section id="work" className="section-frame work-section">
          <div className="section-heading"><span>01</span><h2>Selected work</h2><p>Projects are presented as visual case studies—research, development and resolved form.</p></div>
          <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        </section>

        <section id="research" className="section-frame research-section">
          <div className="section-heading"><span>02</span><h2>Research as material</h2><p>References, textures, structures and observations become part of the design language rather than decoration.</p></div>
          <div className="research-spread">
            <Visual label="TEXTILE / 01" variant="research-large" />
            <div className="research-copy">
              <p className="display-note">01 — Observe</p>
              <h3>Material is evidence.</h3>
              <p>This area is reserved for real research imagery and annotations: textile tests, surface samples, field observations, construction studies and visual references.</p>
              <div className="annotation-list">
                <span>Research</span><span>Surface</span><span>Structure</span><span>Experiment</span>
              </div>
            </div>
            <Visual label="NOTE / 02" variant="research-small" />
          </div>
        </section>

        <section id="about" className="section-frame about-section">
          <div className="section-heading"><span>03</span><h2>About the designer</h2></div>
          <div className="about-grid">
            <p className="about-lead">Design is approached as a process of asking better questions—then testing them through cloth, construction, image and form.</p>
            <div className="about-body"><p>Replace this copy with Priyanka’s real education, design interests, experience and professional introduction. The structure is intentionally concise so the work remains the primary voice.</p><p className="small-copy">Education · Experience · Skills · Location</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <span className="eyebrow">04 / Contact</span>
            <h2>Let the work<br /><em>continue.</em></h2>
            <a className="contact-link" href="mailto:replace@example.com">replace@example.com <ArrowUpRight size={21} strokeWidth={1.3} /></a>
            <div className="contact-footer"><span>Priyanka Vishwakarma</span><span>Fashion Design / Portfolio</span><span>© 2026</span></div>
          </div>
        </section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
