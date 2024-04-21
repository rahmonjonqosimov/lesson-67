import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/FooterLogo.svg";
import "./Footer.css";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  let item = [
    {
      id: 1,
      title: "Company",
      link: ["About", "Careers", "Services", "Blog"],
    },
  ];
  let link = item?.map((el) => (
    <ul className="footer__links" key={el.id}>
      <h3>{el.title}</h3>
      {el?.link?.map((ele, inx) => (
        <li key={inx}>
          <NavLink to={`/${ele.split(" ").join("").toLowerCase()}`}>
            {ele}
          </NavLink>
        </li>
      ))}
    </ul>
  ));
  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <div className="left">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <h3>Bespoke software solutions</h3>
            <div className="icons">
              <Link to={"https://www.facebook.com/"} target="_blank">
                <FaFacebookF />
              </Link>
              <Link to={"https://www.youtube.com/"} target="_blank">
                <FaYoutube />
              </Link>
              <Link to={"https://www.instagram.com/"} target="_blank">
                <FaInstagram />
              </Link>
              <Link to={"https://twitter.com/"} target="_blank">
                <FaTwitter />
              </Link>
            </div>
          </div>
          {link}
          <ul className="footer__links">
            <h3>Connect</h3>
            <li>
              <a href="#">hi@finsweet.com</a>
            </li>
            <li>
              <a href="3">+(123) 456-7890</a>
            </li>
          </ul>
          <form>
            <h3>Join Newsletter</h3>
            <input type="email" required placeholder="Type email here" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="bottom">
          <h5>© All rights reserved – Finsweet</h5>
          <div className="bottom__link">
            <NavLink to={"4"}> Privacy Policy</NavLink>
            <NavLink to={"5"}> Terms & Conditions</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
