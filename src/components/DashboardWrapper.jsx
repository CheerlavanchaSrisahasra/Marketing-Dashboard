import React, { useState } from "react";
import HighlightBanner from "./HighlightBanner";
import CategorySection from "./CategorySection";
import StockSection from "./StockSection";
import ProductSection from "./ProductSection";
import IncomeSection from "./IncomeSection";
import Notifications from "./Notifications";
import LatestOrders from "./LatestOrders";

const DashboardWrapper = () => {
  // State for liked products
  const [likedProducts, setLikedProducts] = useState({});
  // State for cart items with quantity tracking
  const [cartItems, setCartItems] = useState({});

  const toggleLike = (productKey) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productKey]: !prev[productKey],
    }));
  };

  const addToCart = (productKey) => {
    setCartItems((prev) => ({
      ...prev,
      [productKey]: {
        quantity: (prev[productKey]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (productKey) => {
    setCartItems((prev) => {
      const currentQuantity = prev[productKey]?.quantity || 0;

      // If quantity is 1 or less, remove the item completely
      if (currentQuantity <= 1) {
        const newItems = { ...prev };
        delete newItems[productKey];
        return newItems;
      }

      // Otherwise decrement the quantity
      return {
        ...prev,
        [productKey]: {
          quantity: currentQuantity - 1,
        },
      };
    });
  };

  return (
    <div className="dashboard-wrapper">
      <div className="left-panel">
        <HighlightBanner />
        <CategorySection />
        <StockSection />
        <ProductSection
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
      <div className="right-panel">
        <IncomeSection />
        <Notifications />
        <LatestOrders />
      </div>
    </div>
  );
};

export default DashboardWrapper;
