import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 20px;
`;

const Input = styled.input`
  padding: 10px;
`;

export function Info(props) {
  return (
    <Wrapper>
      <Header>
        So rude of us not to ask before getting you outfitted, what's your name?
      </Header>
      <Input
        type="text"
        defaultValue={props.name}
        placeholder="ex: Hillary"
        onChange={e => props.onChange("name", e.target.value)}
      />
    </Wrapper>
  );
}

Info.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
