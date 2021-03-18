import React, {useState, useEffect} from 'react';
// The app will display the data from the NASA API. This requires an API Key as well as a specific URL for the daily image data
import { BASE_URL, API_KEY } from './constants';
// import axios from 'axios';

// Header.js will provide the header component for the app
import Header from './Header';
// Image.js will provide the image component
import Image from './Image';
// Details.js will provide components with information about the image
import Details from './Details';
// Style the App using App.css
import './App.css';

function App() {
  const [imageData, setImageData] = useState({});

  useEffect( () => {
    fetch(`${BASE_URL}?api_key=${API_KEY}`)
      .then( res => res.json())
      .then( json => setImageData(json))
      .catch( err => {
        console.log(err);
      })
  }, []);
  
  // Use moment.js to convert date and time formats
  const moment = require('moment');
  
  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='go!'>🚀</span>!
      </p>
      <input type="date" min="2017-08-15" max="2018-08-26" ></input>
      
      {
        <Header date={moment(imageData.date).format('LL')} />
      }
      {
        <Image hdurl={imageData.hdurl} title={imageData.title} copyright={imageData.copyright} />
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
