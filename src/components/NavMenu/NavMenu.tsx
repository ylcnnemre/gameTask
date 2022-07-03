
import { Link } from "react-router-dom";
import "./navMenu.scss"



const NavMenu = () => {

  return (
    <div className="nav_menu_container">
      <div className="nav_menu_wrapper">
        <div>
          <Link
            to={"/home"}
            className="nav_link"
          >
            Keşfet
          </Link>
          <Link
            to={"/home"}
            className="nav_link"
          >
            Göz At
          </Link>
          <Link
            to={"/home"}
            className="nav_link"
          >
            Haberler
          </Link>
        </div>
      </div>

      <p className="trends">Trends</p>
    </div>
  );
};

export default NavMenu;
export {
  NavMenu
}