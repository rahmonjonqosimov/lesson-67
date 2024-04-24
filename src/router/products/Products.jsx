import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import { Link } from "react-router-dom";

const Products = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  let card = products?.map((el) => (
    <div key={el.id}>
      <Link to={`/product/${el.id}`}>
        <img src={el.thumbnail} alt="" />
      </Link>
    </div>
  ));
  return <div>{card}</div>;
};

export default Products;
