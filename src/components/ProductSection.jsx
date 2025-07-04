import React from "react";
import { FaHeart, FaPlus, FaArrowRight, FaMinus } from "react-icons/fa";
import cabbage from "../assets/cabbage.png";
import Kale from "../assets/Kale.png";
import Brocoly from "../assets/Brocoly.png";
import celery from "../assets/celery.png";

const products = [
  { key: "cabbage", img: cabbage, label: "Cabbage", stock: 210, price: 15.1 },
  { key: "kale", img: Kale, label: "Kale vegetables", stock: 120, price: 8.34 },
  { key: "brocofy", img: Brocoly, label: "Brocofy", stock: 450, price: 5.5 },
  { key: "celery", img: celery, label: "Celery", stock: 800, price: 4.8 },
];

const ProductSection = ({
  likedProducts,
  toggleLike,
  cartItems,
  addToCart,
  removeFromCart,
}) => (
  <section className="product-section">
    <h4>
      Popular Product
      <span className="see-all">
        See All <FaArrowRight />
      </span>
    </h4>
    <div className="products">
      {products.map((prod) => {
        const isInCart = cartItems && cartItems[prod.key];
        const quantity = isInCart ? cartItems[prod.key].quantity : 0;

        return (
          <div className="product-card" key={prod.key}>
            <div className="product-image">
              <img src={prod.img} alt={prod.label} />
              <button
                className="wishlist-btn"
                onClick={() => toggleLike(prod.key)}
              >
                <FaHeart
                  className={`heart-icon ${
                    likedProducts[prod.key] ? "liked" : ""
                  }`}
                />
              </button>
            </div>
            <p>{prod.label}</p>
            <small>{prod.stock} stocks</small>
            <div className="price-add">
              <div className="price-info">
                <span>${prod.price.toFixed(2)}</span>
                <span className="weight">/kgs</span>
              </div>
              <div className="quantity-control">
                {isInCart && quantity > 0 && (
                  <>
                    <button
                      className="quantity-btn minus-btn"
                      onClick={() => removeFromCart(prod.key)}
                    >
                      <FaMinus />
                    </button>
                    <span className="quantity-display">{quantity}</span>
                  </>
                )}
                <button
                  className={`quantity-btn plus-btn ${
                    isInCart ? "in-cart" : ""
                  }`}
                  onClick={() => addToCart(prod.key)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default ProductSection;
