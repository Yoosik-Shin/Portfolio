import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 50px;
`;

export const Nav = styled("div")`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  border-radius: 7px;


`;

export const NavLow = styled("div")`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const NavbarLink = styled(NavLink)`
  width: auto;
  height: 25px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  letter-spacing: 1px;


  &:visited {
    color: white;
  }

  &:hover {
    color: #855050;
    text-decoration: 3px overline;
  }

  &.active {
    color: rgb(219 90 109);
    text-decoration: 2px underline;
    text-underline-position: under;
  }
`;
