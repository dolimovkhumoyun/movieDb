import React from "react";
import { Menu, Dropdown, Button, Avatar, Icon } from "antd";

const ProfileDropdown = ({ profile }) => {
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <div>
        <Button size="large">
          <Avatar src={profile.img_url} style={{ width: 25, height: 25 }} />
          <span className="username-dropdown" style={{ marginLeft: 5 }}>
            {profile.name}
          </span>
          <Icon type="down" />
        </Button>
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
