import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function FunFact() {
  return (
    <Wrapper>
      Outfit shopping can be hard. We get it. We are here to help.
    </Wrapper>
  );
}
