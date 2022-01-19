import React from 'react'
import './HowWeDoIt.scss';


function HowWeDoIt(props: {title: string, paragraf: string, items: {itemTitle: string, imgSrc: string, imgAlt: string}[]}) {
    return (
        <section id="howWeDoIt">
            <div className="container-howWeDoIt">
                <div className="howWeDoIt-info">
                    <h2>{props.title}</h2>
                    <p>
                        {props.paragraf}
                    </p>
                </div>
                <div className="howeWeDoIt-presentation">

                    {props.items.map((item, index) => (
                        <div key={index} className='item'>
                            <div>
                                <h3>{item.itemTitle}</h3>
                            </div>
                            <div>
                                <img src={item.imgSrc} alt={item.imgAlt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowWeDoIt
