import React from "react";
import vegetableBasket from "../assets/vegtablebasket.png";

const HighlightBanner = () => (
  <section className="highlight-banner">
    <div className="discount-banner">
      <div className="banner-text">
        <h3>
          Get special discounts
          <br />
          <span>up to 45%</span>
        </h3>
        <p>Enjoy our vegetables at a discount price</p>
      </div>
      <div className="banner-image">
        <img src={vegetableBasket} alt="Vegetable Discount" />
      </div>
      <button className="use-now-btn">Use Now</button>
    </div>
  </section>
);

export default HighlightBanner;
