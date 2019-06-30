import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Confirm({ name }) {
  return (
    <Wrapper>
      <div>Hey {name}</div>
      <div>
        Ready to get your recommended outfits?
        <a href="https://closetier.com">Get my outfits!</a>
      </div>

      <div>
        Want to receive new outfits every week? Give us your email and sign up!
      </div>
      <input type="text" placeholder="youremail@example.com" />
      <button>Sign Up</button>
    </Wrapper>
  );
}

Confirm.defaultProps = {
  name: "Fucker"
};

Confirm.propTypes = {
  name: PropTypes.string.isRequired
};
