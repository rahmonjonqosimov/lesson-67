import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img1.svg";
import Features from "../../components/features/Features";
const About = () => {
  return (
    <>
      <TopHero
        title="We value human, organizational, and operational intelligence, not just artificial"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        url={img}
        aos="flip-left"
      />
      <Features />
      <Latest />
    </>
  );
};

export default About;
