import React from "react";
import "./product.css";

const Product = ({ title, desc, img, link }) => {
  return (
    <div className="container">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" loading="lazy" />
        </a>
      </div>
      <p className="p-desc">
        <h1>{title}</h1>
        {desc}
      </p>
    </div>
  );
};

export default Product;
