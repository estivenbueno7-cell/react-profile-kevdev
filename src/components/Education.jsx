
function Education() {
  const education = [
    {
      title: "Análisis y Desarrollo de Software",
      institution: "SENA",
      date: "En formación",
      description:
        "Formación tecnológica enfocada en análisis, diseño, desarrollo y mantenimiento de sistemas de software."
    }
  ];

  return (
    <section id="educacion" className="education">

      <div className="section-title">
        <p>Mi formación</p>

        <h2>Educación</h2>
      </div>

      <div className="education-grid">

        {education.map((item) => (
          <article
            className="education-card"
            key={item.title}
          >
            <span>
              {item.date}
            </span>

            <h3>
              {item.title}
            </h3>

            <h4>
              {item.institution}
            </h4>

            <p>
              {item.description}
            </p>
          </article>
        ))}

      </div>

    </section>
  );
}

export default Education;

