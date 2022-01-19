import React from 'react'
import './ExplanationSection.scss';

function ExplanationSection(props: {items: {title: string, paragraf: string}[]}) {
    return (
        <section id="explanationSection">

            {props.items.map((item, index) => (
                <div key={index} className='explanationItem'>
                    <div>
                        <h2>{index + 1 + '. ' + item.title}</h2>
                    </div>
                    <div>
                        <p> {item.paragraf} </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ExplanationSection
