import React from "react";
import { Link } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import { ImUser } from "react-icons/im";
const headerLinks: Array<{ name: string; path: string }> = [
  {
    name: "Mağaza",
    path: "/market",
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "Hakkımızda",
    path: "/about",
  },
  {
    name: "Support",
    path: "/support",
  },
];

/* const menu = (
  <Menu
    className="bg-header-bg block !mt-0 "
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
); */
const menu = (
  <Menu
    items={[
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);
const Header = () => {
  return (
    <header className="flex h-[52px] bg-header-bg items-center justify-between pl-6  ">
      <div className="flex items-center h-full">
        <h1 className="text-white font-bold text-lg cursor-pointer">PTGAMES</h1>
        <ul className="flex items-center h-full ml-4">
          {headerLinks.map((item, i) => {
            return (
              <li key={String(i)} className="header-links">
                <Link
                  to={item.path}
                  className="hover:text-white transition-all duration-200 h-full flex items-center "
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center h-full">
        <div className="px-6 h-full">
          <Dropdown overlay={menu} className=" flex items-center h-full" placement="bottomCenter">
            <a onClick={(e) => e.preventDefault()} className="hover:text-white text-[#C2C2C2]">
              <BiWorld size={"25"}   />
            </a>
          </Dropdown>
        </div>

        <Link
          to={"/login"}
          className="flex items-center text-[#C2C2C2] hover:text-white  h-full px-5  font-semibold"
        >
          <ImUser size={"20"} />
          <span className="ml-2">Giriş Yap</span>
        </Link>
        <Link to={"/register"} className="h-full items-center px-5 text-white hover:text-white px-3 flex bg-header-link-after-color hover:opacity-80 transition-all duration-300">
          Pt Games İndir
        </Link>
      </div>
    </header>
  );
};

export default Header;
export { Header };
