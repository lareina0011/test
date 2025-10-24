// src/App.js

import React, { useState, useRef } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const STAGE = {
  LOGIN: "login",
  DASHBOARD: "dashboard", // const [isLoggedIn, setIsLoggedIn] = useState(false);
};
function App() {
  const [appStage, setAppStage] = useState(STAGE.LOGIN);
  const backgroundMusicRef = useRef(null);
  const handleLoginSuccess = () => {
    setAppStage(STAGE.DASHBOARD);
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.currentTime = 0;
      backgroundMusicRef.current.play().catch((error) => {
        console.error("背景音乐无法播放音乐:", error);
      });
    }
  };
  const renderContent = () => {
    switch (appStage) {
      case STAGE.LOGIN:
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case STAGE.DASHBOARD:
        return <DashboardPage />;
      default:
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return (
    <div className="App-Container">
      <audio
        ref={backgroundMusicRef}
        src={"BackgroundMusic.m4a"}
        loop
        style={{ display: "none" }}
        preload="auto"
      />
      {renderContent()}
    </div>
  );
}

export default App;
