import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import CarpetServiceInfo from './CarpetServiceInfo/CarpetServiceInfo';
import DeepWash from './DeepWash/DeepWash';
import Hero from './Hero/hero';
import Service from './Service/Service';
import Slogan from './Slogan/Slogan';
import TrackService from './TrackService/TrackService';

function Home() {
    useEffect(() => {
      window.scrollTo(0,0)
    
      return () => {
        
      };
    }, []);
    
    return (
        <div>
            <Hero />
            <Service />
            <Slogan />
            <TrackService />
            <CarpetServiceInfo />
            <DeepWash />
            <Footer />
        </div>
    )
}

export default Home
