import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img3.png";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.9)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, transform: "scale(0.9)" }}
    >
      <TopHero
        title="We hired people who are very passionate about what they do"
        desc="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw."
        url={img}
      />
      <Latest />
    </motion.div>
  );
};

export default Careers;
