import React, {useState, useEffect} from 'react';
// The app will display the data from the NASA API. This requires an API Key as well as a specific URL for the daily image data
import { BASE_URL, API_KEY } from './constants';
import axios from 'axios';

// Header.js will provide the header component for the app
import Header from './components/Header';
// Image.js will provide the image component
import Image from './components/Image';
// Details.js will provide components with information about the image
import Details from './components/Details';
// Style the App
import './App.css';

function App() {
  // Use moment.js to convert date and time formats
  const moment = require('moment');
  
//  Create a slice of state for API url and called data
  const [callURL, setCallURL] = useState(`${BASE_URL}?api_key=${API_KEY}`);
  const [imageData, setImageData] = useState({});
 

  const getNewImage = () => {
    setCallURL(`${BASE_URL}?api_key=${API_KEY}&count=1`);
  }


  useEffect( () => {
    axios.get(callURL)
      .then( res => setImageData(res.data))
      .catch( err => {
        console.log(err);
      })
  }, [callURL]);
  

  return (
    <div className='App'>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='go!'>🚀</span>!
      </p> */}
      {
        <Header date={moment(imageData.date).format('LL')} />
      }
      {

      }
      {
        <Image url={imageData.url} title={imageData.title} copyright={imageData.copyright} />
      }
      {
        <Details explanation={imageData.explanation} />
      }
    </div>
  );
}

export default App;
