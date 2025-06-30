import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Vegetable from "../assets/vegetables.png";
import Fashion from "../assets/Fashion.png";
import Mobiles from "../assets/mobiles.png";
import Office from "../assets/office.png";
import Computers from "../assets/laptop.png";

const categories = [
  { img: Vegetable, label: "Vegetables" },
  { img: Fashion, label: "Fashion" },
  { img: Mobiles, label: "Mobiles" },
  { img: Office, label: "Office" },
  { img: Computers, label: "Computers" },
];

const CategorySection = () => (
  <section className="category-section">
    <h4>
      Popular Categories
      <span className="see-all">
        View All <FaArrowRight />
      </span>
    </h4>
    <div className="categories">
      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <div className="category-image round">
            <img src={cat.img} alt={cat.label} />
          </div>
          <span>{cat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CategorySection;
