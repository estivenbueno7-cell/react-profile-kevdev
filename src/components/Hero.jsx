function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hola, soy
        </p>

        <h1>
          Kevin Bueno
        </h1>

        <h2>
          Junior Web Developer
        </h2>

        <p className="hero-description">
          Estudiante de Análisis y Desarrollo de Software,
          apasionado por crear aplicaciones web modernas,
          funcionales y fáciles de usar.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn-primary">
            Ver proyectos
          </a>

          <a href="#contacto" className="btn-secondary">
            Contactarme
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;