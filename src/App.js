import './App.css';
import Home from './Components/Home';
import Map from './Components/Map';
import Navbar from './Components/Navbar';
import { mapOptions } from './Components/MapConfigurations';
import { useJsApiLoader } from '@react-google-maps/api';
import About from './Components/About';
import Review from './Components/Review';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey
  })

  return (
    <div>
      <>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map isLoaded={isLoaded} />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
