import React from "react";
import { femaleProducts } from "../assets/assets";
import "../App.css";

const Products = () => {
  return (
    <>
      <div className="section">
        <h2>Female Essentials</h2>
        <ul>
          {femaleProducts.map((product) => (
            <li key={product.id}>
              <div className="product-card">
                <section className="image_container">
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <img
                    className="product_img"
                    src={product.src}
                    alt={product.name}
                  />
                </section>
                <button>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
