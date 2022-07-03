
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./navMenu.scss"



const NavMenu = () => {

  const {t} =useTranslation()
  return (
    <div className="nav_menu_container">
      <div className="nav_menu_wrapper">
        <div>
          <Link
            to={"/home"}
            className="nav_link"
          >
            {
              t("discover")
            }
          </Link>
          <Link
            to={"/home"}
            className="nav_link"
          >
             {t("browse")}
          </Link>
          <Link
            to={"/home"}
            className="nav_link"
          >
              {t("news")}
          </Link>
        </div>
      </div>

      <p className="trends">
        {
          t("trends")
        }
      </p>
    </div>
  );
};

export default NavMenu;
export {
  NavMenu
}