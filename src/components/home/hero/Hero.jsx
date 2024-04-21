import "./Hero.css";
import logo1 from "../../../assets/images/hero-logo-1.svg";
import logo2 from "../../../assets/images/hero-logo-2.svg";
import logo3 from "../../../assets/images/hero-logo-3.svg";
import heroBG from "../../../assets/images/hero img.png";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__text">
            <h2>Prosper with our bespoke solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="btns">
              <button>See our services</button>
              <button>See All Services </button>
            </div>
            <h6>Worked with 100+ Companies</h6>
            <div className="logos">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>
          <img className="hero__bg" src={heroBG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
