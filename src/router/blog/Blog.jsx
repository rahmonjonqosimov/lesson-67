import BlogHero from "../../components/blog-hero/BlogHero";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.9)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, transform: "scale(0.9)" }}
    >
      <BlogHero />
    </motion.div>
  );
};

export default Blog;
