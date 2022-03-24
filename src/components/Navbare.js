import React from "react";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 80px;
  color: black;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin-top: -30px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;
function navbar({ setSearch }) {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input onChange={(e) => setSearch(e.target.value)} />
            <i class="fa-solid fa-magnifying-glass"></i>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>OH My Troc!</Logo>
        </Center>
        <Right>
          <Link className="Link" to="/Register">
            <MenuItem>SIGN UP </MenuItem>
          </Link>
          <Link to="/SignIn">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge pill bg="light" text="dark"></Badge>
            {""}
            <i class="fa-solid fa-cart-shopping"></i>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default navbar;
