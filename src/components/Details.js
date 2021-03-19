import React from 'react';
import styled from 'styled-components';

// This function exports an information section component to App.js
// The information section displays data from the NASA image object about the particular image for a given day

const StyledInfoSection = styled.section `
  color: #221C35';
`

export default function Details (props) {
  return (
    <StyledInfoSection>
      <h2>About This Image</h2>
      <p>{props.explanation}</p>
      <br></br>
    </StyledInfoSection>
  );
}