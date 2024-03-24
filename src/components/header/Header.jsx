import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Myimage.png";
import HeaderSocialIcons from "./HeaderSocialIcons";
import useTypeWriterEffect from "../../hooks/useTypeWriterEffect";
import { useSelector } from "react-redux";

const Header = () => {
  let { name, titleList } = useSelector(
    (state) => state.detail?.userInfo || {}
  );
  let title = useTypeWriterEffect(titleList || [], 100);

  return (
    <header>
      <div className="container header__container">
        <div className="info">
          <h5>Hello, my name is</h5>
          <h1>Eishta</h1>
          <p>
            <span className="header_static">I</span>{" "}
            <span className="header__title">{title}</span>
          </p>

          <CTA />
        </div>
        <HeaderSocialIcons />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
