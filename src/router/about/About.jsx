import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img1.png";
import Features from "../../components/features/Features";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <TopHero
        title="We value human, organizational, and operational intelligence, not just artificial"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        url={img}
      />
      <Features />
      <Latest />
    </motion.div>
  );
};

export default About;
