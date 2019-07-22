import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExitQuiz = styled.a`
  color: lightgray;
  text-decoration: none;
  font-size: 35px;
  position: absolute;
  right: 15px;
  top: 20px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 15px;
`;

const Logo = styled.img`
  width: 400px;
`;

export function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo
          alt=""
          src="https://cdn.shopify.com/s/files/1/2777/4970/files/closetier_logo_88e3cafe-a46a-45ad-b88b-9fe9b5206dfc_800x.png?v=1522282955"
        />
      </Link>
      <ExitQuiz href="https://closetier.com">X</ExitQuiz>
    </Wrapper>
  );
}
