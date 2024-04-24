import Latest from "../../components/latest/Latest";
import TopHero from "../../components/top-hero/TopHero";
import img from "../../assets/images/img3.png";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
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
