import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img1.png";
import Features from "../../components/features/Features";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.9)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, transform: "scale(0.9)" }}
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
