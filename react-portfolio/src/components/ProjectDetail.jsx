import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/')} className="back-btn">
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <button onClick={() => navigate('/#projects')} className="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </button>

        {project.gallery && project.gallery.length > 0 ? (
          <div className="project-gallery">
            {project.gallery.map((img, index) => (
              <div key={index} className="project-gallery-image">
                <img src={img} alt={`${project.title} - ${index + 1}`} />
              </div>
            ))}
          </div>
        ) : project.image && (
          <div className="project-cover-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <header className="project-detail-header">
          <div className="project-detail-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <h1>{project.title}</h1>
          <p className="project-detail-date">{project.date}</p>
        </header>

        <section className="project-detail-section">
          <h2>Overview</h2>
          <p className="project-description">{project.description}</p>
        </section>

        <section className="project-detail-section">
          <h2>Key Highlights</h2>
          <ul className="project-highlights">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </section>

        {project.achievements && project.achievements.length > 0 && (
          <section className="project-detail-section">
            <h2>Achievements</h2>
            <div className="achievements-grid">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="achievement-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section className="project-detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>
        )}

        <footer className="project-detail-footer">
          <button onClick={() => navigate('/#projects')} className="back-btn-large">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to All Projects
          </button>
        </footer>
      </div>
    </div>
  )
}

export default ProjectDetail
