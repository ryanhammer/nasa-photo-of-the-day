import React from 'react';
import styled from 'styled-components';

// This function exports a form component to App.js
// The header will allow users to input a date in order to update the app with the photo for said date

 // Create slice of state for date
 const currentDate = moment(Date()).format('YYYY-MM-DD');
 const [inputDate, setInputDate] = useState(currentDate);

 // const newDate = document.addEventListener

 const getNewDate = () => {
  setInputDate(document.querySelector('input').value);
  console.log(inputDate);
}

<form>
<label>Select any date after June 16, 1995:</label>
<input type='date' min='1995-06-16' max= {currentDate} ></input>
<button id='subButton' onClick= {getNewDate} >Get Image</button>
</form>