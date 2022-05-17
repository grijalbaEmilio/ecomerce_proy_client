import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        className="admin-sider__options"
        mode="inline"
        defaultSelectedKeys={["/admin"]}
      >
        <Menu.Item className="admin-sider__options__option" key="1">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="admin-sider__options__option" key="2">
          <Link to={"/admin/login"}>
            <MenuOutlined />
            <span className="mav-text">Menu web</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
