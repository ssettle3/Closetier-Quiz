import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  color: #3c4043;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

export function Theme({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
