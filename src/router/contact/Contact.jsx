import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <h1 style={{ margin: "40px", textAlign: "center" }}>Contact Us</h1>
      </motion.div>
    </>
  );
};

export default Contact;
