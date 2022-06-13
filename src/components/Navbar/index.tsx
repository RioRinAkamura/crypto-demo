import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <NavbarWrapper>
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/tylim88/crypto-symbol/master/img/symbol.png"
            alt="https://raw.githubusercontent.com/tylim88/crypto-symbol/master/img/symbol.png"
            height={50}
          />
        </Link>

        <Nav>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/about">
            <NavItem>About</NavItem>
          </Link>
          <Link to="/testfwr">
            <NavItem>Test ForwardRef</NavItem>
          </Link>
        </Nav>
      </NavbarWrapper>
    </Wrapper>
  );
};

export default Navbar;

export const Wrapper = styled.div`
  width: 100%;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  height: 80px;
`;

const Nav = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-left: 24px;
  padding: 4px 12px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #1d1d1d;
  border-radius: 5px;
  transition: all 0.2s ease-out;

  :hover {
    background-color: #ffca10;
  }
`;
