import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Products.css";
import BlogHero from "../../components/blog-hero/BlogHero";
import Loading from "../../components/loading/Loading";
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
import { motion } from "framer-motion";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  let card = products?.slice(0, 12)?.map((el) => (
    <div className="card" key={el.id}>
      <Link onClick={scrollTop} to={`/product/${el.id}`}>
        <img src={el.thumbnail} alt="" />
      </Link>
      <div className="text">
        <h4>{el.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et.
        </p>
        <button>
          Learn More <HiArrowLongRight />
        </button>
      </div>
    </div>
  ));
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.9)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, transform: "scale(0.9)" }}
    >
      <BlogHero />
      <section id="product">
        <div className="container">
          <h2>Products</h2>
          {loading ? <Loading /> : <></>}
          <div className="wrapper">{card}</div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;
