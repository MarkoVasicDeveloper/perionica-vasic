import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/header';
import { galeryProps } from '../PropsConfig/GaleryProps';
import Galery from './Galery/Galery';

function GaleryPage() {
  return <div>
            <Header />
            <Galery {...galeryProps}/>
            <Footer />
        </div>;
}

export default GaleryPage;
