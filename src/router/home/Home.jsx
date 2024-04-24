import Latest from "../../components/latest/Latest";
import Hero from "../../components/home/hero/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <Latest />
    </motion.div>
  );
};

export default Home;
