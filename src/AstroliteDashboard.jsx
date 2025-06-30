import React, { useState, useEffect } from "react";
import "./styles/AstroliteDashboard.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardWrapper from "./components/DashboardWrapper";

const AstroliteDashboard = () => {
  const [likedProducts, setLikedProducts] = useState({
    cabbage: false,
    kale: false,
    brocofy: false,
    celery: false,
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const toggleLike = (product) => {
    setLikedProducts((prev) => ({
      ...prev,
      [product]: !prev[product],
    }));
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error enabling fullscreen:", err.message);
      });
      setFullScreen(true);
    } else {
      document.exitFullscreen?.();
      setFullScreen(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} />
      <main className="main-content">
        <Header
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          toggleFullScreen={toggleFullScreen}
          darkMode={darkMode}
        />
        <DashboardWrapper
          likedProducts={likedProducts}
          toggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default AstroliteDashboard;
