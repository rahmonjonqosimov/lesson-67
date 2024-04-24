import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";

const SingleRoute = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  // const { title, description, price, brand } = product;
  console.log(product);
  return <div>SingleRoute</div>;
};

export default SingleRoute;
