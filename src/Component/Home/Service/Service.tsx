import { faBed, faCarCrash, faMoneyBillWave, faSoap, faTractor, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.scss';

export default function Service() {

    function expand(att: string) {
        const container = document.querySelector(att) as any;
        container.style.transition = '500ms ease'
        container.style.width = '90%';
        container.style.height = '100%';

        const paragraf = document.querySelector(att + ' p') as any;
        paragraf.classList.add ('paragraf')
    }

    function expandEnd(att: string) {
        const container = document.querySelector(att) as any;
        container.style.width = '80%';
        container.style.height = '60%';

        const paragraf = document.querySelector(att + ' p') as any;
        paragraf.classList.remove ('paragraf')
    }
    
    return (
        <section id='service'>
            <div className='service-info'>
                <h2>Nase Usluge</h2>
                <p>Ovo su neke od usluga koje mozete dobiti u nasoj perionici...</p>
            </div>
            <div className='service-holder-show'>
                <div className='row-one'>
                    <div className='row-one-part'>
                        <div className='container-info one'>
                            <div>
                                <h2>Pranje Vozila</h2>
                                <p style={{opacity: 0}} className=''>
                                    Obicno pranje vozila, spolja i iznutra obuhvata usisavanje, 
                                    brisanje plastike, spoljasnje pranje, brisanje prozora i mazanje guma.
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faSoap} onMouseEnter={() => expand('.one')} onMouseLeave = {() => expandEnd('.one')}/>
                        </div>
                    </div>
                    <div className='row-one-part'>
                        <div className='container-info two'>
                            <div>
                                <h2>Pranje Tepiha</h2>
                                <p style={{opacity: 0}} className=''>
                                    Tepihe peremo i susimo najsavremenijim masinama dostupnim na nasem 
                                    trzistu. Plus proverena hemija i nema greske!!
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faMoneyBillWave} onMouseEnter={() => expand('.two')} onMouseLeave = {() => expandEnd('.two')}/>
                        </div>
                    </div>
                    <div className='row-one-part'>
                        <div className='container-info three'>
                            <div>
                                <h2 style={{border: '1px solid transparent'}}>Dubinsko pranje vozila</h2>
                                <p style={{opacity: 0}} className=''>
                                Kod ove vrste pranja nista se ne preskace.
                                Pere se nebo, svi plasticni delovi, sedista, tepih, gepek...
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faCarCrash} onMouseEnter={() => expand('.three')} onMouseLeave = {() => expandEnd('.three')}/>
                        </div>
                    </div>
                </div>
                
                <div className='row-two'>
                    <div className='row-one-part'>
                        <div className='container-info one2'>
                            <div>
                                <h2>Pranje Kamiona</h2>
                                <p style={{opacity: 0}} className=''>
                                    Kamione iskljucivo peremo hemijskim sredstvima koja rastapaju
                                    svu prljavstinu sa vozila.
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faTruckMoving} onMouseEnter={() => expand('.one2')} onMouseLeave = {() => expandEnd('.one2')}/>
                        </div>
                    </div>
                    <div className='row-one-part'>
                        <div className='container-info two2'>
                            <div>
                                <h2>Pranje Namestaja</h2>
                                <p style={{opacity: 0}} className=''>
                                    Masinom za dubinsko pranje i praskom koji se uz nju koristi vas 
                                    namestaj zasijace kao nov!!
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faBed} onMouseEnter={() => expand('.two2')} onMouseLeave = {() => expandEnd('.two2')}/>
                        </div>
                    </div>
                    <div className='row-one-part'>
                        <div className='container-info three2'>
                            <div>
                                <h2 style={{width: '80%', margin: '0 auto', marginBottom: '1rem'}}>Pranje radnih masina</h2>
                                <p style={{opacity: 0}} className=''>
                                    Pranje poljoprivrednih masina i traktora. Postoji i mogucnost 
                                    dubinskog pranja traktora.
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faTractor} onMouseEnter={() => expand('.three2')} onMouseLeave = {() => expandEnd('.three2')}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
