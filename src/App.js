// src/App.js

import React from "react";
import "./App.css"; // 全局样式
import LoginPage from "./pages/LoginPage/LoginPage"; // <-- 导入新的登录组件

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App-Container">
      {/* 暂时直接显示 LoginPage */}
      <LoginPage />

      {/* 未来你可能会这么写：
      {isLoggedIn ? <DashboardPage /> : <LoginPage onLoginSuccess={...} />}
      */}
    </div>
  );
}

export default App;
