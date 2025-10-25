import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./DashboardPage.css";
import DashboardPage_bg from "../../assets/DashboardPage_bg.jpg";

const { Header, Content, Footer } = Layout;
const items = [
  { key: "1", label: "我们的故事" },
  { key: "2", label: "我们的时光" },
  { key: "3", label: "照片墙" },
  { key: "4", label: "纪念日" },
];
const DashboardPage = ({ OnLogout }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const layoutStyle = {
    backgroundColor: "#f8e0e6",
    minHeight: "100vh",
    backgroundImage: `url(${DashboardPage_bg})`,
  };

  return (
    <Layout style={DashboardPage} className="Dashboard-Layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f8c6d2",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: 1,
            minWidth: 0,
            backgroundColor: "#f8c6d2",
            borderRadius: "8px",
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
          // backgroundColor: "#ffffff",
          backgroundColor: "transparent",
          minHeight: "80vh",
        }}
      >
        <footer
          style={{
            fontsize: "12px",
            textAlign: "center",
          }}
        ></footer>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            { title: "首页" },
            { title: "我们的时光" },
            { title: "关于我们" },
          ]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            backgroundColor: "#fdf2f5",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          fontsize: "12px",
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
      {/* <style jsx>
          {`
            .ant-menu-item-selected {
              background-color: transparent !important;
              color: #e76f9e !important;
            }
            .ant-menu-item:focus {
              background-color: transparent !important;
              outline: none !important;
            }
            .ant-men .ant-menu-item-active::after {
              border-bottom: 2px solid #e76f9e !important;
            }
            .ant-menu-item:hover {
              background-color: #f8e0e6;
              color: #e76f9e;
            }
          `}
        </style> */}
    </Layout>
  );
};
export default DashboardPage;
