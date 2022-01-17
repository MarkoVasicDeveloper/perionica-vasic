import React from 'react'
import './HowWeDoIt.scss';
import img from '../../../Img/racket.png';
import img2 from '../../../Img/smallcarpet.png';
import img3 from '../../../Img/hose.png';
import img4 from '../../../Img/radiator.png';
import img5 from '../../../Img/vacuum-cleaner.png';

function HowWeDoIt() {
    return (
        <section id="howWeDoIt">
            <div className="container-howWeDoIt">
                <div className="howWeDoIt-info">
                    <h2>Kako mi to radimo</h2>
                    <p>
                        Pokazacemo vam celokupan postupak pranja tepiha u nasoj perionici, korak po korak...
                    </p>
                </div>
                <div className="howeWeDoIt-presentation">
                    <div className='item'>
                        <div>
                            <h3>Tresenje tepiha</h3>
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <h3>Masinsko pranje</h3>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <h3>Ispiranje i cedjenje</h3>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <h3>Susenje u komorama</h3>
                        </div>
                        <div>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <h3>Usisavanje i cetkanje</h3>
                        </div>
                        <div>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeDoIt
