import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  img {
    width: 100px;
  }
`;

const NavList = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0 10px;
    }
  }
`;

const Burger = styled(HamburgerIcon)`
  display: none !important;
  @media screen and (max-width: 600px) {
    display: block !important;
  }
`;

const Close = styled(CloseIcon)`
  display: none !important;
  @media screen and (max-width: 600px) {
    display: block !important;
  }
`;

const Navbar = () => {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const toggleDisplay = () => {
    setIsShownMenu(!isShownMenu);
  };
  const navMenu = useRef(null);
  const clickedOutsideMenus = (e) => {
    if (navMenu.current && isShownMenu && !navMenu.current.contains(e.target)) {
      setIsShownMenu(false);
    }
  };
  document.addEventListener("mousedown", clickedOutsideMenus);
  return (
    <NavbarContainer>
      <Link to="/">
        <img src="/logo.png" alt="" />
      </Link>
      <Burger w={10} h={10} onClick={toggleDisplay} />

      <NavList>
        <Close w={4} h={4} />
        <ul>
          <li className="sign-in-mobile" onClick={() => setIsShownMenu(false)}>
            SIGN IN
          </li>
          <Link to={"/about"}>
            <li onClick={() => setIsShownMenu(false)}>ABOUT</li>
          </Link>
          <li onClick={() => setIsShownMenu(false)}>EXPERT SUPPORT</li>
          <li onClick={() => setIsShownMenu(false)}>REGISTER</li>
          <li onClick={() => setIsShownMenu(false)}>CONTACT US</li>
        </ul>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
