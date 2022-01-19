import React, { useEffect, useRef, useState } from 'react'
import './CarpetWashingSlogan.scss';

function CarpetWashingSlogan() {

    const sloganDiv = useRef(null) as any;
    const [margin, setMargin] = useState(0)

    useEffect(() => {
        function slide() {
            const div = sloganDiv.current.getBoundingClientRect();
            if(div.top <= window.screen.availHeight && margin < window.screen.availWidth - div.height) return setMargin(margin + window.screen.availWidth/200);

        }
        window.addEventListener('scroll', slide)
        return () => {
            window.removeEventListener('scroll', slide)
        }
    }, [margin])

    return (
        <section id="carpetWashingSlogan" ref={sloganDiv}>
            <div className="carpetWashingSloganDiv" style={{marginLeft: margin + 'px'}}>
                <div>
                    <h3>MI PEREMO VI ODMARATE!</h3>
                </div>
                <div>
                    <h2>Dostava Tepiha</h2>
                </div>
                <div>
                    <p>
                        Besplatano preuzimanje tepiha i vracanje na ardesu!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CarpetWashingSlogan
