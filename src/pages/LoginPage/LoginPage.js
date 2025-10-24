import "./LoginPage.css";
import React, { useState } from "react";
function LoginPage({ onLoginSuccess }) {
  // 如果您想管理输入框的值，可以在这里使用 useState
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const correctUsername = "admin";
  const correctPassword = "20050704";
  const handleLogin = () => {
    setErrorMessage("");
    if (!username || !password) {
      setErrorMessage("用户名和密码不能为空");
      return;
    }
    if (username === correctUsername && password === correctPassword) {
      onLoginSuccess();
    } else {
      setErrorMessage("用户名或密码错误");
    }
    setPassword("");
  };

  return (
    <div className="App">
      <div className="text-show">
        <p className="text-1">江江and盈盈的小网站</p>
      </div>

      <div className="login-box">
        {/* 标题 */}
        <h1>欢迎来到我们的世界</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {/* 用户名输入框 */}
        <div className="input-group">
          <label htmlFor="username">用户名:</label>
          <input
            type="text"
            id="username"
            placeholder="请输入用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* 密码输入框 */}
        <div className="input-group">
          <label htmlFor="password">密码:</label>
          <input
            type="password"
            id="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 登录按钮 */}
        <button type="submit" className="login-button" onClick={handleLogin}>
          登 录
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
