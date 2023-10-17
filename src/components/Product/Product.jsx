import React from "react";
import "./product.css";

const Product = ({ img, link }) => {
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
        <h3>Title</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        recusandae reiciendis ex facere placeat itaque est illo dolorem libero
        maxime pariatur totam veritatis! Neque quos, harum magnam ab rem
        voluptate.
      </p>
    </div>
  );
};

export default Product;
