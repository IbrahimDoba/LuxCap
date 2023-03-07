import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 4px solid rgba(189, 0, 255, 0.25);
  color: #bd00ff;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const LogoCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(189, 0, 255, 0.1);
  width: 140px;
  height: 65px;
  margin-left: 10%;

   @media screen and (max-width: 768px) {
    width: 100px;
    height: 60px;
   }
`;
export const Logo = styled(Link)`
    font-size: 25px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;
export const NavRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const LinkCon = styled.div``;
export const NavLinkCon = styled.div``;
export const NavLink = styled(Link)`
    font-weight: 600;
    font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #BD00FF;
   @media screen and (max-width: 768px) {
     font-size: 12px;
     line-height: 1.2;
  }
`;
