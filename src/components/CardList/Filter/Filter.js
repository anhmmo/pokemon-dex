import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Filter({ onClickButton }) {
  return (
    <div>
      <Dropdown
        overlay={
          <Menu onClick={onClickButton}>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
          </Menu>
        }
      >
        <a
          href
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}

export default Filter;
