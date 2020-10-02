import React from "react";

const Product = ({ item }) => {
  return (
    <li key={item.name}>
      <a href='#!'>
        <img src={item.thumb} alt={item.name} />
      </a>

      <h3>{item.name}</h3>
      <span>{item.price}</span>
    </li>
  );
};

export default Product;
