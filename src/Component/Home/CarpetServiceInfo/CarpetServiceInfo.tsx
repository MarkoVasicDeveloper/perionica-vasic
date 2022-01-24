import React from 'react';
import './CarpetServiceInfo.scss';
import img from '../../../Img/pranje-tepiha-finish.jpg';

function CarpetServiceInfo() {
    return (
        <section id='carpetServiceInfo'>
            <div className="carpetInfo">
                <div className='carpetServiceSlogan'>
                    <h3>Neka vasi tepisi zamirisu</h3>
                </div>
                <div className='carpetServiceTitle'>
                    <h2>Pranje Tepiha</h2>
                </div>
                <div className='carpetServiceInfoParagraf'>
                    <p>
                    Masinsko pranje tepiha je veoma zahtevan posao. Da bi tepisi bili 100% cisti,
                    potrebno je koristiti vise razlicitih masina i hemije od kojih svaka obavlja
                    odedjene operacije. Koriscenje kvalitetnih masina i pravi izbor hemije su od
                    izuzetnog znacaja. Kod masinskog pranja tepisi prolaze kroz nekoliko faza...
                    </p>
                </div>
                <div className='carpetServiceButton'>
                    <button>
                        <a data-testid = 'linkWashCarpet' href="/#/pranje-tepiha">
                            Detaljnije...
                        </a>
                    </button>
                </div>
                
            </div>
            <div className="carpetPhotoInfo">
                <img src={img} alt="pranje-tepiha-finish.jpg" />
            </div>
        </section>
    )
}

export default CarpetServiceInfo
