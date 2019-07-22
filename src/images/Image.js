import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 400px;
`;

export function Image({ src }) {
  return <StyledImage src={src} alt={src} />;
}
