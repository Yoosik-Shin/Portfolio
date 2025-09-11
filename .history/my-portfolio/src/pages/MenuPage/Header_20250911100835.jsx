import React from "react";
import { Outlet } from "react-router-dom";
import * as H from "./Header.styled.js";
import { DropContainer } from "../Dropdown/DropContainer.jsx";

export const Header = () => {
  return (
    <H.Header>
      <DropContainer/>
      <H.Nav>
        <H.NavLow>
          <H.NavbarLink to="/">Home</H.NavbarLink>
        </H.NavLow>
        <H.NavLow>
          <H.NavbarLink to="/header/about">About Me</H.NavbarLink>
        </H.NavLow>
        <H.NavLow>
          <H.NavbarLink to="/header/snd-menu">2ndMenu</H.NavbarLink>
        </H.NavLow>
        <H.NavLow>
          <H.NavbarLink to="/header/trd-menu">3rdMenu</H.NavbarLink>
        </H.NavLow>
        <H.NavLow>
          <H.NavbarLink to="/header/fth-menu">4thMenu</H.NavbarLink>
        </H.NavLow>
        <H.NavLow>
          <H.NavbarLink to="/header/timer-menu">Timer</H.NavbarLink>
        </H.NavLow>
      </H.Nav>
      <Outlet />
    </H.Header>
  );
};
