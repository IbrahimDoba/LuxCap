import React from "react";
import {  Logo, LogoCon, NavContainer, NavLeft, NavLink, NavLinkCon, NavRight } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLeft>
        <LogoCon>
            <Logo to="/">Logo</Logo>
        </LogoCon>
      </NavLeft>
      <NavRight>
            <NavLinkCon>
                <NavLink to="/pricepage">Pricing</NavLink>
            </NavLinkCon>
            <NavLinkCon>
                <NavLink to="/about">About</NavLink>
            </NavLinkCon>
            <NavLinkCon>
                <NavLink to="/contact">Contact</NavLink>
            </NavLinkCon>
            <NavLinkCon>
                <NavLink to="/">Home</NavLink>
            </NavLinkCon>
      </NavRight>
    </NavContainer>
  );
};

export default Navbar;
