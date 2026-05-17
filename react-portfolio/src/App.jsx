import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from './data/projects'
import Header from './components/Header'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
    } else if (savedTheme === 'light') {
      setDarkMode(false)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const toggleTheme = () => {
    const newState = !darkMode
    setDarkMode(newState)
    localStorage.setItem('theme', newState ? 'dark' : 'light')
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header />

      <a href="#hero" className="site-icon" title="Home">
        <img src="/favicon.svg" alt="Home" />
      </a>

      <main className="main-content">
          {/* Hero Section */}
          <section id="hero" className="section hero-section">
            <div className="hero-layout">
              <div className="hero-image reveal-left">
                <img src="/profile.png" alt="Thanaphumi Kunuthai" />
              </div>
              <div className="hero-text reveal-right">
                <h1 className="hero-name">Thanaphumi Kunuthai</h1>
                <p className="hero-tagline">1st year Engineering @ UBC</p>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="section about-section">
            <h2 className="section-title reveal">About Me</h2>
            <p className="about-text reveal">
              As a first-year Engineering student at the University of British Columbia, I've spent my time mastering the balance between hardware prototyping and intelligent software. Having worked on projects spanning accessible medical devices and EEG signal classification, I specialize in building practical, adaptive technologies that solve real-world problems. I believe the best engineering is rooted in a desire to help others, a principle I carry into both my biomedical designs and my recreational running.
            </p>
          </section>

          {/* Education Section */}
          <section id="education" className="section">
            <h2 className="section-title reveal">Education</h2>
            <div className="timeline stagger">
              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>University of British Columbia</h3>
                    <span className="timeline-date">Expected May 2029</span>
                  </div>
                  <p className="timeline-company">Bachelor of Applied Science (Engineering) | Vancouver, BC</p>
                  <ul className="timeline-details">
                    <li>Outstanding International Student Award</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title reveal">Experience</h2>
            <div className="timeline stagger">
              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Analytics (Machine Learning)</h3>
                    <span className="timeline-date">Feb 2026 - Present</span>
                  </div>
                  <p className="timeline-company">UBC Bionics | Vancouver, BC, Canada</p>
                  <ul className="timeline-details">
                    <li>Process and classify complex EEG (electroencephalogram) signals using Python-based machine learning frameworks to translate brain activity into functional commands</li>
                    <li>Develop predictive models that bridge human physiology and digital intelligence, enabling bionic systems to respond intuitively</li>
                    <li>Refine neural data pipelines to advance the capabilities of assistive prosthetic technologies</li>
                  </ul>
                </div>
              </article>

              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Mechanical Engineer</h3>
                    <span className="timeline-date">Jan 2026 - Present</span>
                  </div>
                  <p className="timeline-company">ACCESS Venture EWB UBC | Vancouver, BC, Canada</p>
                  <ul className="timeline-details">
                    <li>Design and prototype an ergonomic, low-cost urine collection device for non-invasive cervical cancer screening targeting women in under-resourced African communities</li>
                    <li>Apply user-centered design principles with rapid 3D prototyping to create highly manufacturable and affordable medical hardware</li>
                    <li>Engineer solutions that prioritize patient experience and empathy while addressing global health accessibility challenges</li>
                  </ul>
                </div>
              </article>

              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Co-Founder & Head of Mechanic</h3>
                    <span className="timeline-date">Aug 2022 - Mar 2025</span>
                  </div>
                  <p className="timeline-company">ACT Technology Club (ACTEC) | Bangkok, Thailand</p>
                  <ul className="timeline-details">
                    <li>Co-founded STEM club (renamed from "ACT Aerospace Technology Club" to "ACT Technology Club" in 2024), growing membership from 33 to 75+ members — becoming the largest club at our school</li>
                    <li>Led weekly workshops on 3D modeling, 3D printing, web development, data science, robotics, and AI</li>
                    <li>Mentored award-winning teams to global recognition (Thailand Innovation Awards Finalist, JDIE 2025 Honourable Mention)</li>
                    <li>Built and launched a 30km CubeSat with atmospheric sensors to collect predictive weather data</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2 className="section-title reveal">Projects</h2>
            <div className="projects-grid stagger">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="project-card reveal-scale"
                >
                  {project.thumbnail && (
                    <div className="project-thumbnail">
                      <img src={project.thumbnail} alt={project.title} />
                    </div>
                  )}
                  {(project.github || project.devpost || project.demo || project.youtube) && (
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="GitHub">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {project.devpost && (
                        <a href={project.devpost} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="Devpost">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853H10.112z"/></svg>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="Live Demo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        </a>
                      )}
                      {project.youtube && (
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} title="YouTube">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                      )}
                    </div>
                  )}
                  <div className="project-content">
                    <div className="project-header">
                      <div>
                        <h3>{project.title}</h3>
                        <p className="project-date">{project.date}</p>
                      </div>
                      <span className="view-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Research Section */}
          <section id="research" className="section">
            <h2 className="section-title reveal">Research</h2>
            <div className="research-list stagger">
              <article className="research-item reveal-left">
                <div className="research-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div className="research-content">
                  <h3>
                    <a href="https://www.researchgate.net/publication/386126758_Hydrosense_A_Hair-Based_Absorption_System_for_Heavy_Metal_Removal_from_Wastewater" target="_blank" rel="noopener noreferrer">
                      Hydrosense: A Hair-Based Absorption System for Heavy Metal Removal from Wastewater
                    </a>
                  </h3>
                  <p className="research-venue">6th Kasetsart University International Conference (KU-IC 2024)</p>
                  <p className="research-authors">Thanaphumi Kunuthai et al.</p>
                  <p className="research-description">Published research on bio-based water filtration using chemically treated human hair to remove heavy metals, achieving 81% Lead and 63% Copper removal rates.</p>
                  <div className="research-tags">
                    <span className="tag">Publication</span>
                    <span className="tag">Environmental Engineering</span>
                  </div>
                </div>
              </article>

            </div>
          </section>

          {/* Competitions Section */}
          <section id="competitions" className="section">
            <h2 className="section-title reveal">Competitions</h2>
            <div className="competitions-marquee">
              <div className="competitions-track">
                <article className="competition-card">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Participant</span>
                      <h3>Social Case Competition 2024</h3>
                      <p className="competition-event">AIESEC</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card special">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Special Prize</span>
                      <h3>MUICT-AST TECH Competition</h3>
                      <p className="competition-event">CTF: Cybersecurity</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card qualified">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">2nd Round</span>
                      <h3>School Satellite Competition</h3>
                      <p className="competition-event">GISTDA</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card nasa">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 14 10 18 10.5 15 14 16 18 12 16 8 18 9 14 6 10.5 10 10 12 6"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Galactic Problem Solver</span>
                      <h3>NASA Space Apps Challenge</h3>
                      <p className="competition-event">NASA</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card participant">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Participant</span>
                      <h3>Logistic Drone Business Competition</h3>
                      <p className="competition-event">GAMMACO & TNI</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card participant">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Participant</span>
                      <h3>Siriraj Hackathon 2023</h3>
                      <p className="competition-event">Siriraj Hospital</p>
                    </div>
                  </div>
                </article>
                {/* Duplicate for seamless loop */}
                <article className="competition-card">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Participant</span>
                      <h3>Social Case Competition 2024</h3>
                      <p className="competition-event">AIESEC</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card special">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Special Prize</span>
                      <h3>MUICT-AST TECH Competition</h3>
                      <p className="competition-event">CTF: Cybersecurity</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card qualified">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">2nd Round</span>
                      <h3>School Satellite Competition</h3>
                      <p className="competition-event">GISTDA</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card nasa">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 14 10 18 10.5 15 14 16 18 12 16 8 18 9 14 6 10.5 10 10 12 6"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Galactic Problem Solver</span>
                      <h3>NASA Space Apps Challenge</h3>
                      <p className="competition-event">NASA</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card participant">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Participant</span>
                      <h3>Logistic Drone Business Competition</h3>
                      <p className="competition-event">GAMMACO & TNI</p>
                    </div>
                  </div>
                </article>
                <article className="competition-card participant">
                  <div className="competition-header">
                    <div className="competition-medal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                    <div className="competition-info">
                      <span className="competition-rank">Participant</span>
                      <h3>Siriraj Hackathon 2023</h3>
                      <p className="competition-event">Siriraj Hospital</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Volunteering Section */}
          <section id="volunteering" className="section">
            <h2 className="section-title reveal">Volunteering</h2>
            <div className="timeline stagger">
              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Makers Making Change (UBC SBME)</h3>
                    <span className="timeline-date">December 2025</span>
                  </div>
                  <ul className="timeline-details">
                    <li>Created cost-effective, accessible, switch-activated devices for children with disabilities</li>
                  </ul>
                </div>
              </article>

              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>King Chulalongkorn Memorial Hospital</h3>
                    <span className="timeline-date">August 2024</span>
                  </div>
                  <ul className="timeline-details">
                    <li>Volunteered at the Elderly Society Clinic to assist staff with measuring patient vitals (BMI, blood pressure)</li>
                    <li>Guided elderly patients in using the hospital's digital appointment application to improve service flow</li>
                  </ul>
                </div>
              </article>

              <article className="timeline-item reveal-left">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>School Journal Writer (ACT Times Vol.16-17)</h3>
                    <span className="timeline-date">August 2021 - October 2022</span>
                  </div>
                  <ul className="timeline-details">
                    <li>Wrote articles and conducted interviews for the school journal</li>
                    <li>Developed writing, interviewing, and storytelling skills</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section skills-section">
            <h2 className="section-title reveal">Skills</h2>
            <div className="skills-grid-layout stagger">
              <div className="skill-box blue reveal-scale">
                <h3>Languages</h3>
                <p>Python, C++, C, C#, R, Dart, Arduino</p>
              </div>
              <div className="skill-box purple reveal-scale">
                <h3>Frameworks</h3>
                <p>PyTorch, TensorFlow, NumPy, Pandas, Flutter, React</p>
              </div>
              <div className="skill-box green reveal-scale">
                <h3>Tools</h3>
                <p>Google Cloud, Fusion 360, Raspberry Pi, Git, VS Code</p>
              </div>
              <div className="skill-box orange reveal-scale">
                <h3>DevOps</h3>
                <p>Kubernetes, Docker, GitHub Actions, Prometheus, PostgreSQL, Linux</p>
              </div>
            </div>
          </section>

          <footer className="page-footer">
            <p>&copy; 2024 Thanaphumi Kunuthai. All rights reserved.</p>
            <p className="footer-note">Built with React.</p>
          </footer>
        </main>

      <button className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
        <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
    </div>
  )
}

export default App
