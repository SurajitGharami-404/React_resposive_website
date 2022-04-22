import React from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import logoLg from "../Assets/images/whole.svg";
import logoSm from "../Assets/images/union.svg";
import menu from "../Assets/images/mobile.svg";

const Nav = ({name}) => {
  const handleClick=()=>{
    name.current.classList.add("active");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-md-5 px-2" style={{backgroundColor:"#fff"}}>
      <div className="container-fluid px-0">
        <a className="navbar-brand w-25" href="/">
          <picture>
            <source media="(min-width:769px)" srcSet={logoLg} />
            <source media="(min-width:576px)" srcSet={logoSm} />
            <img src={logoSm} alt="logo" />
          </picture>
        </a>
        <button
          className="navbar-toggler mobile-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={menu} alt="mobile-menu"/>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 align-items-center">
            <li className="nav-item flex-fill d-flex justify-content-center my-lg-0 my-3">
              <SearchBar
                placeholder={"Search for your favourite groups in ATG"}
              />
            </li>
            <li className="nav-item flex-fill d-flex justify-content-end my-lg-0 my-2">
              <Dropdown
                title={"Create account."}
                url="#"
                urlText="It's free!"
                click={handleClick}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
