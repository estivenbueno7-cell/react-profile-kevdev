function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Angular",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Express"
      ]
    },
    {
      title: "Bases de datos",
      skills: [
        "MySQL",
        "PostgreSQL"
      ]
    },
    {
      title: "Herramientas",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Docker"
      ]
    }
  ];

  return (
    <section id="habilidades" className="skills">

      <div className="section-title">
        <p>Lo que utilizo</p>
        <h2>Habilidades</h2>
      </div>

      <div className="skills-groups">

        {skillGroups.map((group) => (
          <div
            className="skill-group"
            key={group.title}
          >

            <h3>{group.title}</h3>

            <div className="skills-grid">

              {group.skills.map((skill) => (
                <div
                  className="skill-card"
                  key={skill}
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;