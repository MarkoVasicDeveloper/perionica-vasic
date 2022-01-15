import React from 'react';
import CarpetServiceInfo from './CarpetServiceInfo/CarpetServiceInfo';
import Hero from './Hero/hero';
import Service from './Service/Service';
import Slogan from './Slogan/Slogan';
import TrackService from './TrackService/TrackService';

function Home() {
    return (
        <div>
            <Hero />
            <Service />
            <Slogan />
            <TrackService />
            <CarpetServiceInfo />
        </div>
    )
}

export default Home
