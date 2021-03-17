import React from 'react';

// This function exports the header component to App.js
// The header will contain a title for the App and the current date since the photo of the day changes each day
export default function Header (props) {
  return (
    <header className='header-container'>
      <h1>NASA Image of the Day!</h1>
      <h3>Date: {props.date}</h3>
    </header>
  );
}