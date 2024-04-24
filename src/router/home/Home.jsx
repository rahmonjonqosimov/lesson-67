import Latest from "../../components/latest/Latest";
import Hero from "../../components/home/hero/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Hero />
      <Latest />
    </motion.div>
  );
};

export default Home;
