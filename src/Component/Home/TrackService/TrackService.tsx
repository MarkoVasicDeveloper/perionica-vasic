import React, { useEffect, useRef, useState } from 'react';
import './TrackService.scss';
import img from '../../../Img/bezkontaktno-pranje-kamiona.jpg';

function TrackService() {
    const [animate, setAnimate] = useState(false);
    const myPosition = useRef(null) as any;

    useEffect(() => {
        function myPositionFunction() {
            const section = myPosition.current.getBoundingClientRect();
            if(section.top <= section.height){
                setAnimate(true);
            } else{
                setAnimate(false);
            }
        }
        window.addEventListener('scroll', myPositionFunction);
        return () => {
            window.removeEventListener('scroll', myPositionFunction)
        }
    }, [])
    
    return (
        <section id='track-service' ref={myPosition}>
            <div className={(animate) ? "info animateInfoTrack" : 'info'}>
                <div className="track-title">
                    <h2>Pranje kamiona</h2>
                </div>
                <div className="track-info-p">
                    <p>
                        <span> STOP CETKAMA! </span>Nema potrebe za grebanjem vaseg kamiona! Savremeno pranje 
                        kamiona podrazumeva upotrebu hemije koja rastvara svu prljavstinu, koja se
                        potom spere sa vozila.
                    </p>
                </div>
            </div>
            <div className={(animate) ? 'track-photo animateTrack-photo' : 'track-photo'}>
                {/* <div className="track"></div> */}
                <img src={img} alt="bezkontaktno-pranje-kamiona.jpg" />
            </div>
        </section>
    )
}

export default TrackService
