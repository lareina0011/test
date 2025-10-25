// src/App.js
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
// import backgroundWave from "./assets/BackgroundMusic.wav";

const STAGE = {
  LOGIN: "login",
  DASHBOARD: "dashboard",
};

function App() {
  const [appStage, setAppStage] = useState(STAGE.LOGIN);
  const backgroundMusicRef = useRef(null);

  const handleLoginSuccess = () => {
    console.log("该处已被调用");
    const music = backgroundMusicRef.current;

    // 尝试播放音乐
    if (music) {
      music.currentTime = 0;
      music
        .play()
        .then(() => {
          console.log("音乐播放成功！");
        })
        .catch((err) => {
          console.warn("登录成功后自动播放仍失败:", err);
        });
    }

    setAppStage(STAGE.DASHBOARD);
  };

  useEffect(() => {
    const music = backgroundMusicRef.current;
    if (!music) return;

    if (appStage === STAGE.LOGIN) {
      music.pause();
      music.currentTime = 0;
    }
  }, [appStage]);

  const handleLogout = () => {
    setAppStage(STAGE.LOGIN);
  };

  return (
    <div className="App-Container">
      {appStage === STAGE.LOGIN ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DashboardPage onLogout={handleLogout} />
      )}
      <audio
        ref={backgroundMusicRef}
        loop
        preload="auto"
        style={{ display: "none" }}
      >
        <source src="/BackgroundMusic.wav" type="audio/wav" />
      </audio>
    </div>
  );
}

export default App;
