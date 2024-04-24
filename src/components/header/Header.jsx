import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  let item = ["About", "Careers", "Services", "Blog", "Contact us", "Products"];
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  let [menu, setMenu] = useState(false);
  const handleSubmit = () => {
    setMenu(!menu);
  };
  let links = item?.map((el, inx) => (
    <li key={inx}>
      <NavLink
        onClick={() => {
          scrollTop(), setMenu(false);
        }}
        className="nav__link"
        to={`/${el.split(" ").join("").toLowerCase()}`}
      >
        {el}
      </NavLink>
    </li>
  ));

  return (
    <section id="header">
      <div className="container">
        <div className="header">
          <Link
            onClick={() => {
              scrollTop(), setMenu(false);
            }}
            to={"/"}
          >
            <img src={logo} alt="" />
          </Link>
          <div className={menu ? "links show" : "links"}>
            <ul>{links}</ul>
            <button>Clone project</button>
          </div>
          <CgMenu
            onClick={handleSubmit}
            className={menu ? "menu--none" : "menu"}
          />
          <IoMdClose
            onClick={handleSubmit}
            className={menu ? "menu" : "menu--none"}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
