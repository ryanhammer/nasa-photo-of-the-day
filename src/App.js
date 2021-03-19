import React, {useState, useEffect} from 'react';
// The app will display the data from the NASA API. This requires an API Key as well as a specific URL for the daily image data
import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';

// Header.js will provide the header component for the app
import Header from './Header';
// Image.js will provide the image component
import Image from './Image';
// Details.js will provide components with information about the image
import Details from './Details';
// Style the App using App.css
import './App.css';

function App() {
  // Use moment.js to convert date and time formats
  const moment = require('moment');
  
  // Create slice of state for both date and called data
  const currentDate = moment(Date()).format('YYYY-MM-DD');
  const [inputDate, setInputDate] = useState(currentDate);
  // console.log(inputDate);
  const [imageData, setImageData] = useState({});
  // const newDate = document.addEventListener

  const getNewDate = () => {
    setInputDate(document.querySelector('input').value);
    console.log(inputDate);
  }


  useEffect( () => {
    // axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${inputDate}`)
      .then( res => setImageData(res.data))
      .catch( err => {
        console.log(err);
      })
  }, [inputDate]);
  
  return (
    <div className='App'>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='go!'>🚀</span>!
      </p> */}
      {
        <Header date={inputDate} />
      }
      {
        <form>
          <label>Select any date after June 16, 1995:</label>
          <input type='date' min='1995-06-16' max= {currentDate} ></input>
          <button id='subButton' onClick= {getNewDate} >Get Image</button>
        </form>
      }
      {
        <Image url={imageData.url} title={imageData.title} copyright={imageData.copyright} />
      }
      {
        <Details explanation={imageData.explanation} />
      }
    </div>
    // <div>
    // </div>
  );
}

export default App;
