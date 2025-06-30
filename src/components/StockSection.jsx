import React from "react";
import {
  FaCarrot,
  FaFish,
  FaAppleAlt,
  FaDrumstickBite,
  FaFilter,
} from "react-icons/fa";

const stockData = [
  {
    icon: <FaCarrot />,
    label: "Veggies",
    value: "1,890 stock",
    color: "green",
  },
  { icon: <FaCarrot />, label: "Tubers", value: "2,040 stock" },
  { icon: <FaFish />, label: "Fish", value: "548 stock" },
  { icon: <FaAppleAlt />, label: "Fruits", value: "300 stock" },
  { icon: <FaDrumstickBite />, label: "Meat", value: "236 stock" },
];

const StockSection = () => (
  <section className="stock-section">
    <h4>
      Categories and Stock
      <button className="filter-btn">
        <FaFilter /> Filter
      </button>
    </h4>
    <div className="stock-cards">
      {stockData.map((item, idx) => (
        <div key={idx} className={`card ${item.color || ""}`}>
          <div className="stock-icon">{item.icon}</div>
          <div className="stock-value">{item.value}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StockSection;
