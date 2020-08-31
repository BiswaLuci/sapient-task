import React, { useState } from "react";

import CardList from "./CardList";

const Products = ({ products }) => {
  const [value, setValue] = useState("Select");

  const setList = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="products">
      <div className="products-nav">
        <h3>Products</h3>
      </div>

      <CardList products={products} />
    </div>
  );
};

export default Products;
