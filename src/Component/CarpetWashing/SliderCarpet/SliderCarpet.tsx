import React, { useEffect, useRef, useState } from 'react'
import './SliderCarpet.scss'
import img from '../../../Img/centrifuga-masina-za-cedjenje-tepiha.png'
import img2 from '../../../Img/kalorifer.png'
import img3 from '../../../Img/vlagara-masina-za-isusivanje-i-odstanjanje-vlage.png'
import img4 from '../../../Img/cetkara-masina-za-cetkanje-tepiha.png'

function SliderCarpet() {
    const imageDiv = useRef(null) as any
    const [margin, setMargin] = useState(0)
    const [transition, setTransition] = useState(true)
    const [width, setWidth] = useState(window.screen.availWidth)

    useEffect(() => {
        if(window.screen.availWidth > 1200) {
            setWidth(window.screen.availWidth / 2)
        }
        const interval = setInterval(() => {
            setMargin(margin - width)
            if(margin === -(width * 4)) {
                setMargin(0)
                setTransition(false)
            }else{
                setTransition(true)
            }
        }, (margin === -(width * 4)) ? 500 : 3000)
        return () => {
            clearInterval(interval)
        }
    }, [margin, width])
    return (
        <section id="sliderCarpet">
            <div className="sliderInfo">
                <div className="titleCarpet">
                    <h2>Masinsko pranje tepiha</h2>
                </div>
                <div className="textSlider">
                    <p>
                        Masinsko pranje tepiha je veoma zahtevan posao. Da bi tepisi bili 100% cisti,
                        potrebno je koristiti vise razlicitih masina i hemije od kojih svaka obavlja
                        odedjene operacije. Koriscenje kvalitetnih masina i pravi izbor hemije su od
                        izuzetnog znacaja.
                        Kod masinskog pranja tepisi prolaze kroz nekoliko faza koje smo dole objasnili.
                    </p>
                </div>
            </div>
            <div className="slider"  ref={imageDiv}>
                <div className="imageContainer" style={{marginLeft: margin + 'px', transition: (transition) ? '500ms ease' : 'none'}}>
                    <div>
                        <img style={{height: '300px'}} src={img} alt="centrifuga-masina-za-cedjenje-tepiha" />
                    </div>
                    <div>
                        <img src={img2} alt="kalorifer" />
                    </div>
                    <div>
                        <img style={{width: '300px'}} src={img3} alt="vlagara-masina-za-isusivanje-i-odstanjanje-vlage" />
                    </div>
                    <div>
                        <img src={img4} alt="cetkara-masina-za-cetkanje-tepiha" />
                    </div>
                    <div>
                        <img style={{height: '300px' }} src={img} alt="centrifuga-masina-za-cedjenje-tepiha" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderCarpet;