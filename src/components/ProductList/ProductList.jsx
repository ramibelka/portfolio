import React from "react";
import Product from "../Product/Product";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">
          Each project is a unique piece of development 🧩 Click on the picture
          to go to the website (Live Demo).
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
              link={item.link}
              gitLink={item.gitLink}
              tech={item.tech}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
