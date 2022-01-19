import img from '../../Img/racket.png';
import img2 from '../../Img/smallcarpet.png';
import img3 from '../../Img/hose.png';
import img4 from '../../Img/radiator.png';
import img5 from '../../Img/vacuum-cleaner.png';

export const howWeDoProps = {
    title: 'Kako mi to radimo',
    paragraf: 'Pokazacemo vam celokupan postupak pranja tepiha u nasoj perionici, korak po korak...',
    items: [
        {
            itemTitle: 'Tresenje tepiha',
            imgSrc: img,
            imgAlt: 'racket.png'
        },
        {
            itemTitle: 'Masinsko pranje',
            imgSrc: img2,
            imgAlt: 'smallcarpet.png'
        },
        {
            itemTitle: 'Ispiranje i cedjenje',
            imgSrc: img3,
            imgAlt: 'hose.png'
        },
        {
            itemTitle: 'Susenje u komorama',
            imgSrc: img4,
            imgAlt: 'radiator.png'
        },
        {
            itemTitle: 'Usisavanje i cetkanje',
            imgSrc: img5,
            imgAlt: 'vacuum-cleaner.png'
        },
    ]
}