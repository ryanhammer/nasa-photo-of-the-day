import React from 'react';
import styled from 'styled-components';

// This function exports the image component to App.js
// This section will contain the actual image of the day to be displayed within the App and will credit the photographer from within the data

const StyledImageSection = styled.section`
  img {
    width: 610px;
    height: 600px;
    padding-top: 5%;
  }
  figcaption {
    text-align: center;
    padding-bottom: 5%;
  }
`
export default function Image (props) {
  return (
    <StyledImageSection className='image-container'>
      <img src={props.url} alt={props.title}></img>
      <figcaption>Photo courtesy of {props.copyright}</figcaption>
    </StyledImageSection>
  );
}