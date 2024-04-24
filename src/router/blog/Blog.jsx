import BlogHero from "../../components/blog-hero/BlogHero";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <BlogHero />
    </motion.div>
  );
};

export default Blog;
