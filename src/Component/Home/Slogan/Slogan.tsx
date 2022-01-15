import React, { useEffect, useRef, useState } from 'react';
import './Slogan.scss';

export default function Slogan() {
    const [animate, setAnimate] = useState(false)
    const sloganDiv = useRef(null) as any
    useEffect(() => {
        function position () {
            const top = sloganDiv.current.getBoundingClientRect();
            if (top.top <= top.height / 2) {
                setAnimate(true)
            }
        }
            window.addEventListener('scroll', position)
        return () => {
            window.removeEventListener('scroll', position)
        }
    }, [animate])

    

    return (
        <section id='slogan' ref={sloganDiv}>
            <div className={(animate) ? 'slogan-container animateSloganContainer' : 'slogan-container'} >
                <div className={(animate) ? 'sloganSubtitle animateSloganSubtitle' : 'sloganSubtitle'}>
                    <h3>MI PEREMO VI ODMARATE!</h3>
                </div>
                <div className={(animate) ? 'sloganTitle animateSloganTitle' : 'sloganTitle'}>
                    <h2>Pranje Vozila</h2>
                </div>
                <div className={(animate) ? 'sloganInfo animateSloganInfo' : 'sloganInfo'}>
                    <p>
                    Zahvaljujuci bezkontaktnom pranju ne postoji mogucnost grebanja laka na vozilu 
                    cesticama koje ostaju na sundjeru prilikom tradicionalnog pranja!
                    </p>
                </div>
            </div>
        </section>
    )
}
