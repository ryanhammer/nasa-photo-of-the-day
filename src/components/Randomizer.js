import React from 'react';
import styled from 'styled-components';

// This function exports a button component to App.js
// The button will allow the user to select a new random photo from the image of the day library

const StyledButtonSection = styled.section`
  color: #221C35;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;

  p {
    font-size: 1.25rem;
  }
  button {
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    background-color: #221C35;
    color: white;
  }
`

export default function Randomizer (props) {
  return (
    <StyledButtonSection>
      <p>Click the button for a new image!</p>
      <button onClick={getNewImage}>New Picture!</button>
    </StyledButtonSection>
  );
}