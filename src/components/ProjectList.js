import '../stylesheets/ui.scss'
import { Link } from 'react-router'

export const ProjectList = ({ projects }) =>
  (
    <nav className="project-list">
      <Link to="/">Main Page</Link>
      <Link to="/project-list">Project</Link>
    </nav>
  )
