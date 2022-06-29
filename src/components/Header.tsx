import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="flex bg-headerBg">
      <div className="flex items-center">
        <h1 className="text-[#B5B5B5] font-bold text-lg ">PTGAMES</h1>
        <ul className="flex items-center">
            <li>
                <Link to={"/"} >
                    Mağaza
                </Link>
            </li>
            <li>
                Topluluk
            </li>

        </ul>
      </div>
    </header>
  );
};

export default Header;
export { Header };
