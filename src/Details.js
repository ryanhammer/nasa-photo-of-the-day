import React from 'react';

// This function exports an information section component to App.js
// The information section displays data from the NASA image object about the particular image for a given day
export default function Details (props) {
  return (
    <section className='info-container'>
      <h2>About This Image</h2>
      <p>{props.explanation}</p>
    </section>
  );
}