import React from 'react';

// This function exports the image component to App.js
// This section will contain the actual image of the day to be displayed within the App and will credit the photographer from within the data
export default function Image (props) {
  return (
    <section className='image-container'>
      <img src={props.hdurl} alt={props.title}></img>
      <figcaption>Photo courtesy of {props.copyright}</figcaption>
    </section>
  );
}