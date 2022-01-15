import React from 'react'
import './DeepWash.scss'

function DeepWash() {
    return (
        <section id='deepWash'>
            <div className="deepWashCar">
                <div className="deepWashContainer">
                    <div className="deepWashCarPhoto"></div>
                    <div className="deepWashInfo">
                        <div>
                            <h2>Dubinsko Pranje Automobila</h2>
                        </div>
                        <div className='deepWashParagraf'>
                            <p>
                                Kako izgleda proces dubinskog pranja automobila pogledajte ovde...
                            </p>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <button>
                        <a href="/#">Detaljnije...</a>
                    </button>
                </div>
            </div>
            <div className="deepWashCar">
                <div className="deepWashContainer">
                    <div className="deepWashFurniturePhoto"></div>
                    <div className="deepWashInfo">
                        <div>
                            <h2>Dubinsko Pranje Namestaja</h2>
                        </div>
                        <div className='deepWashParagraf'>
                            <p>
                                Kako izgleda proces dubinskog pranja namestaja pogledajte ovde...
                            </p>    
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <button>
                        <a href="/#">Detaljnije...</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DeepWash
