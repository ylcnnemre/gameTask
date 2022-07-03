import React, { useContext } from "react";
import { Link, useLocation, useParams, useRoutes } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import { ImUser } from "react-icons/im";
import { Context, IContextType } from "App";
import "./header.scss"


const headerLinks: Array<{ name: string; path: string }> = [
  {
    name: "Market",
    path: "/market",
  },
  {
    name: "Library",
    path: "/library",
  },
  {
    name: "Hakkımızda",
    path: "/about",
  },
];


const menu = (
  <Menu
    items={[
      {
        label: "1st menu item",
        key: "1",
      },
      {
        label: "2nd menu item",
        key: "2",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);








const Header = () => {
  const { auth,setAuth }: IContextType = useContext(Context);
  const  {pathname}= useLocation()


  return (
    <header className="header">
      <div className="header_link_container">
        <h1 className="logo"  >PTGAMES</h1>
        <ul className="header_links_wrapper">
          {headerLinks.map((item, i) => {
            return (
              <li key={String(i)} className="header_link_item">
                <Link
                  to={item.path}
                  className={`header_link_item_1 ${pathname===item.path && "!text-blue-600" } `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header_button_menu">
        <div className="dropdown_container">
          <Dropdown
            overlay={menu}
            className="dropdown"
            placement="bottomCenter"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="dropdown_link"
            >
              <BiWorld size={"25"} />
            </a>
          </Dropdown>
        </div>

        {auth ? (
           <Link
           to={""}
           className="logout_button"
           onClick={()=>setAuth(false)}
         >

          Logout
         </Link>
        ) : (
          <div className="buttons_container">
            <Link
              to={"/login"}
              className="login_button"
            >
              <ImUser size={"20"} />
              <span className="login_button_span">Login</span>
            </Link>
            <Link
              to={"/register"}
              className="register_button"
            >
             Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
export { Header };
