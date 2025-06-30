import React from "react";
import HighlightBanner from "./HighlightBanner";
import CategorySection from "./CategorySection";
import StockSection from "./StockSection";
import ProductSection from "./ProductSection";
import IncomeSection from "./IncomeSection";
import Notifications from "./Notifications";
import LatestOrders from "./LatestOrders";

const DashboardWrapper = ({ likedProducts, toggleLike }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="left-panel">
        <HighlightBanner />
        <CategorySection />
        <StockSection />
        <ProductSection likedProducts={likedProducts} toggleLike={toggleLike} />
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
