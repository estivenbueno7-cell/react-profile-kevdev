import profileImage from "../assets/perfil.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-content">

        <div className="hero-image">
          <img
            src={profileImage}
            alt="Foto de Kevin Bueno"
          />
        </div>

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
          enfocado en crear aplicaciones web modernas,
          funcionales y escalables.
        </p>

        <div className="hero-buttons">

          <a
            href="#proyectos"
            className="btn btn-primary"
          >
            Ver mis proyectos
          </a>

          <a
            href="#contacto"
            className="btn btn-secondary"
          >
            Contactarme
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;