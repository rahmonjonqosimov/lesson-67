import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  let item = ["About", "Careers", "Services", "Blog", "Contact us"];
  let links = item?.map((el, inx) => (
    <li key={inx}>
      <NavLink
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
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="links">
            <ul>{links}</ul>
            <button>Clone project</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
