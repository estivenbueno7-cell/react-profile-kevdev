
function Projects() {
  const projects = [
    {
      title: "LATTECH",
      description:
        "Sistema web para la gestión y trazabilidad del café.",
      technologies: "Java, Spring Boot, Angular, MySQL"
    },
    {
      title: "Portfolio Web",
      description:
        "Portafolio personal para presentar mi perfil profesional, habilidades y proyectos.",
      technologies: "React, JavaScript, CSS"
    },
    {
      title: "Sistema de Reservas",
      description:
        "Aplicación web para gestionar clientes, servicios y reservas.",
      technologies: "Java, Spring Boot, JPA, MySQL"
    }
  ];

  return (
    <section id="proyectos" className="projects">

      <div className="section-title">
        <p>Lo que he construido</p>
        <h2>Mis proyectos</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
          >
            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <span>
              {project.technologies}
            </span>
          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;
