//Importación de imagen
import Mug from "../assets/images/Mug1.png";

import Contact from "./contact";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-text">
        <div className="lorem">
          <span>LOREM</span>
        </div>

        <div className="ipsum">
          <span>IPSUM</span>
        </div>

        <div className="dolor">
          <span>DOLOR</span>
        </div>
      </div>

      <div className="hero-section-image">
        <img src={Mug} alt="Pink Mug" />
      </div>

      <Contact />
    </section>
  );
};

export default Hero;
