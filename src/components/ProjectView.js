import '../stylesheets/ui.scss'

export const ProjectView = ({ projects }) =>
  (
    <div className="project-list">
      <li>
        {projects.map((project, i) =>
          <ul key={i}>
            {project}
          </ul>)
        }
      </li>
    </div>
  )
