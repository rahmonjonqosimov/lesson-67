import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleRoute.css";
import axios from "../../api";
import SingleRouteLoading from "./single-route-loading/SingleRouteLoading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingleRoute = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!product) {
    return <SingleRouteLoading />;
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section id="single">
        <div className="single__route--card container">
          <img src={product.thumbnail} alt="" className="product__image" />
          <div className="images">
            <img src={product.images[0]} alt="" />
            <img src={product.images[1]} alt="" />
            <img src={product.images[2]} alt="" />
          </div>
          <h3> {product.title}</h3>
          <p>{product.description}</p>
          <span>
            Price: <h6> ${product.price}</h6>
          </span>
          <Link to={`/products`} className="go-back">
            Go back
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default SingleRoute;
