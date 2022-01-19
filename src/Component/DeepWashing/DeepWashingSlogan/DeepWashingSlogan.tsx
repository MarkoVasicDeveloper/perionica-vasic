import React from 'react'
import './DeepWashingSlogan.scss';
import img from '../../../Img/dubinsko-pranje-masina-za-dubinsko-pranje.jpg';

function DeepWashingSlogan() {
    return (
        <section id="deepWashingSlogan">
            <div className="deepWashingContainer">
                <div className='deepWashingInfo'>
                    <div>
                        <h3>Dubinsko pranje</h3>
                        <h1>Dubinsko pranje vozila</h1>
                    </div>
                    <div>
                        <p>
                        Svakako vise od obicnog pranja! To je slozen proces koji podrazumeva
                        upotrebu masina, hemije i auto kozmetike, koji otklanjaju uglavnom sve
                        fleke i prljavstinu sa vaseg tepiha, tapacirunga, sedista, plastike...
                        Posle ovog pranja vozilo dobija lep izgled i prijatan miris za ugodnu
                        voznju!
                        </p>
                    </div>
                </div>
                <div className='deepWashingImage'>
                    <img src={img} alt="dubinsko-pranje-masina-za-dubinsko-pranje" />
                </div>
            </div>
        </section>
    )
}

export default DeepWashingSlogan
