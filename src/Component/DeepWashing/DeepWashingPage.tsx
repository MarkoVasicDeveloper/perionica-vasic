import React from 'react'
import HowWeDoIt from '../CarpetWashing/HowWeDoIt/HowWeDoIt'
import Footer from '../Footer/Footer'
import Header from '../Header/header'
import DeepWashingSlogan from './DeepWashingSlogan/DeepWashingSlogan'
import ExplanationSection from '../CarpetWashing/ExplanationSection/ExplanationSection';
import img from '../../Img/vacuum-cleaner.png'
import img2 from '../../Img/seat.png'
import img3 from '../../Img/air-compressor.png'
import img4 from '../../Img/cleaning-spray.png'
import img5 from '../../Img/vacuum-cleaner.png'

const item = {
    title: 'KOMPLETNO DUBINSKO PRANJE KORAK PO KORAK!',
    paragraf: 'Ovako izgleda celokupno dubinsko pranje...',
    items: [
        {
            itemTitle: 'DETALJNO USISAVANJE',
            imgSrc: img,
            imgAlt: 'vaccum-cleaner.png'
        },
        {
            itemTitle: 'DUBINSKO PRANJE',
            imgSrc: img2,
            imgAlt: 'seat.png'
        },
        {
            itemTitle: 'PRANJE TEZE DOSTUPNIH MESTA',
            imgSrc: img3,
            imgAlt: 'air-compressor.png'
        },
        {
            itemTitle: 'TRETIRANJE PLASTIKE',
            imgSrc: img4,
            imgAlt: 'cleaning-spray.png'
        },
        {
            itemTitle: 'USISAVANJE I SPOLJASNJE PRANJE',
            imgSrc: img5,
            imgAlt: ''
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

function DeepWashingPage() {
    return (
        <div>
            <Header />
            <DeepWashingSlogan />
            <HowWeDoIt {...item} />
            <ExplanationSection {...explanationItem}/>
            <Footer />
        </div>
    )
}

export default DeepWashingPage
