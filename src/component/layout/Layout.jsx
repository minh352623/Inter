import React from "react";
import Content from "./Content";
import SidebarLeft from "./SidebarLeft";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center">
      <SidebarLeft></SidebarLeft>
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
