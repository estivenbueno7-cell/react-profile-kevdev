function Experience() {
  const experiences = [
    {
      date: "2024 - Actualidad",
      position: "Estudiante de Análisis y Desarrollo de Software",
      company: "SENA",
      description:
        "Formación en desarrollo de software, bases de datos, desarrollo web, metodologías ágiles y construcción de aplicaciones."
    },
    {
      date: "Experiencia laboral",
      position: "Guía de turismo y atención al cliente",
      company: "Sector turístico",
      description:
        "Atención a clientes, orientación turística, comunicación con visitantes y acompañamiento durante diferentes experiencias."
    }
  ];

  return (
    <section id="experiencia" className="experience">

      <div className="section-title">
        <p>Mi trayectoria</p>
        <h2>Experiencia</h2>
      </div>

      <div className="experience-list">

        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={experience.position}
          >

            <span className="experience-date">
              {experience.date}
            </span>

            <h3>
              {experience.position}
            </h3>

            <h4>
              {experience.company}
            </h4>

            <p>
              {experience.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Experience;