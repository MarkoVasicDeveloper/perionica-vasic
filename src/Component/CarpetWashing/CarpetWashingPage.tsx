import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/header'
import CarpetWashingSlogan from './CarpetWashingSlogan/CarpetWashingSlogan'
import ExplanationSection from './ExplanationSection/ExplanationSection'
import HowWeDoIt from './HowWeDoIt/HowWeDoIt'
import SliderCarpet from './SliderCarpet/SliderCarpet'
import img from '../../Img/racket.png';
import img2 from '../../Img/smallcarpet.png';
import img3 from '../../Img/hose.png';
import img4 from '../../Img/radiator.png';
import img5 from '../../Img/vacuum-cleaner.png';

const item = {
    title: 'Kako mi to radimo',
    paragraf: 'Pokazacemo vam celokupan postupak pranja tepiha u nasoj perionici, korak po korak...',
    items: [
        {
            itemTitle: 'Tresenje tepiha',
            imgSrc: img,
            imgAlt: 'racket.png'
        },
        {
            itemTitle: 'Masinsko pranje',
            imgSrc: img2,
            imgAlt: 'smallcarpet.png'
        },
        {
            itemTitle: 'Ispiranje i cedjenje',
            imgSrc: img3,
            imgAlt: 'hose.png'
        },
        {
            itemTitle: 'Susenje u komorama',
            imgSrc: img4,
            imgAlt: 'radiator.png'
        },
        {
            itemTitle: 'Usisavanje i cetkanje',
            imgSrc: img5,
            imgAlt: 'vacuum-cleaner.png'
        },
    ]
}

const explanationItem = {
    items: [
    {
        title: 'TRESENJE TEPIHA',
        paragraf: `Ovo je prvi i mozda najbitniji korak u procesu pranja. Na ovaj nacin se otklanja necistoca
                    koja se nakupila duboko i tepihu. Za tepihe koji ne prodju ovaj korak ne moze se reci da su
                    dobro oprani.`
    },
    {
        title: 'MASINSKO PRANJE',
        paragraf: `Ovaj proces zapocinje potapanjem tepiha u cistu vodu uz dodatak hemije koja rastapa
                    prljavstinu. Zatim se tepih cetka masinom za cetkanje tepiha kojom se skidaju fleke.
                    To se isto radi i za poledjinu tepiha.`
    },
    {
        title: 'ISPIRANJE I CENTRIFUGIRANJE',
        paragraf: `U ovom koraku tepisi se ubacuju u specijalnu masinu namenjenu ispiranju i centrifugiranju
                    tepiha. U nju se prvo ubacuje voda koja ispira svu hemiju iz tepiha, a zatim se tepih
                    centrifugira. Na ovaj nacin se iz tepiha izvlaci 85-95% vode.`
    },
    {
        title: 'SUSENJE U KOMORAMA',
        paragraf: `Nakon ispiranja tepisi se ubacuju u prostorije - komore opremljene masinama koje odstranjuju
                    vlagu iz tepiha, sto nam omogucava da peremo tepihe nezavisno od vremenskih uslova.`
    },
    {
        title: 'USISAVANJE I CETKANJE',
        paragraf: `Oprani i osuseni tepisi se dodatno usisavaju i cetkaju, pakuju u zastitne folije i isporucuju.`
    }
]
}

function CarpetWashing() {
    return (
        <div>
            <Header />
            <SliderCarpet />
            <HowWeDoIt {...item} />
            <ExplanationSection {...explanationItem} />
            <CarpetWashingSlogan />
            <Footer />
        </div>
    )
}

export default CarpetWashing
