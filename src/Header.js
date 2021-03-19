import React from 'react';

// This function exports the header component to App.js
// The header will contain a title for the App and the current date since the photo of the day changes each day
export default function Header (props) {
  return (
    <header className='header-container'>
      <h1>Welcome to the NASA Image of the Day App!</h1>
      <h4> To select a different date, use the input below. You are currently viewing the image for: {props.date}</h4>
    </header>
  );
}