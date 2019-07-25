import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Question } from "./Question";
import { Button } from "./common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  height: 25px;
  font-size: 15px;
  border: none;
  box-shadow: 0px 0px 3px 0px lightgray;
`;

const InputLabel = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 3px;
  margin: 15px 0 5px 0;
`;

export function Info(props) {
  const signUp = nextQuestion => {
    // try {
    //   axios.post("https://closetier.us18.list-manage.com/subscribe/post", {
    //     email: email
    //   });
    // } catch (e) {
    //   console.log(`😱 Axios request failed: ${e}`);
    // }
    nextQuestion();
  };

  const isDisabled = () => {
    const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
    return !props.name || !emailRegex.test(props.email);
  };

  return (
    <Wrapper>
      <Question question="You're almost ready to get dressed" />
      <InputLabel>Enter your name</InputLabel>
      <Input
        type="text"
        defaultValue={props.name}
        onChange={e => props.onChange("name", e.target.value, false)}
      />
      <InputLabel>Enter your email</InputLabel>
      <Input
        type="text"
        defaultValue={props.email}
        onChange={e => props.onChange("email", e.target.value, false)}
      />
      <Button
        isDisabled={isDisabled()}
        text="submit"
        margin={"25px 0 0 0"}
        onClick={() => signUp(props.nextQuestion)}
      />
    </Wrapper>
  );
}

Info.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func
};
