import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img2.png";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.9)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, transform: "scale(0.9)" }}
    >
      <TopHero
        title="We serve clients with ground breaking solutions"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        url={img}
      />
      <Latest />
    </motion.div>
  );
};

export default Service;
