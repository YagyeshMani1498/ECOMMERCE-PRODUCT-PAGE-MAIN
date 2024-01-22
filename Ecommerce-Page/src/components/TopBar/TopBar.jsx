import { useState, useRef } from "react";

import menuOpen from "../../assets/images/icon-menu.svg";
import menuClose from "../../assets/images/icon-close.svg";

import avatar from "../../assets/images/image-avatar.png";

import { CartContainer } from "../cart/CartContainer";

export function TopBar() {
  const navContainerRef = useRef();

  const backgroundRef = useRef();

  // open-close-menu
  function openMenu() {
    navContainerRef.current.classList.remove("hide");
    backgroundRef.current.classList.remove("bg-none");
  }
  function closeMenu() {
    navContainerRef.current.classList.add("hide");
    backgroundRef.current.classList.add("bg-none");
  }

  return (
    <>
      <header className="header">
        <div className="menu-logo-container">
          <button className="menu-open" onClick={openMenu}>
            <img src={menuOpen} alt="menuOpen" />
          </button>
          <p className="brand-name">sneakers</p>
          <div className="nav-container hide" ref={navContainerRef}>
            <button onClick={closeMenu} className="menu-close">
              <img src={menuClose} alt="menuClose" />
            </button>
            <ul className="nav-links">
              <li>
                <a className="link" href="">
                  Collections
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Men
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Women
                </a>
              </li>
              <li>
                <a className="link" href="">
                  About
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cart-avatar-container">
          {/* cart container component */}
          <CartContainer className="cart-logo-box"></CartContainer>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </header>
      <div
        ref={backgroundRef}
        className="background bg-none"
        onClick={closeMenu}
      ></div>
    </>
  );
}
