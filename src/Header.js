import React from 'react';
import styled from 'styled-components';
// This function exports the header component to App.js
// The header will contain a title for the App and the current date since the photo of the day changes each day

const StyledHeader = styled.header`
  color: 'purple';
  width: 60%;
  display: 'flex';
  flexDirection: 'row';
  alignItems: 'center';
  justifyContent: 'space-evenly';
`;

export default function Header (props) {
  return (
    <StyledHeader >
      <h1>Welcome to the NASA Image of the Day App!</h1>
      <h4> To select a different date, use the input below. You are currently viewing the image for: {props.date}</h4>
    </StyledHeader>
  );
}