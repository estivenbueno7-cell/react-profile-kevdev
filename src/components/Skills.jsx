
function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub"
  ];

  return (
    <section id="habilidades" className="skills">

      <div className="section-title">
        <p>Lo que utilizo</p>
        <h2>Habilidades</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
