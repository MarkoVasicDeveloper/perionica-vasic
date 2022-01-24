import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

function Header() {

    const [showNav, setShowNav] = useState(false);

    const links = [
        {id: 1, text: 'Home', link: '/'},
        {id: 2, text: 'Pranje tepiha', link: '/pranje-tepiha'},
        {id: 3, text: 'Dubinsko pranje', link: '/dubinsko-pranje'},
        {id: 4, text: 'Galerija', link: '/galerija'},
        {id: 5, text: 'Kontakt', link: '/kontakt'},
    ]

    return (
        <div className='header-holder'>
            <div className='logo-holder'>
                <div className="logo">
                    perionica vasic
                </div>
            </div>
            <div className='nav-holder'>
                <button className="buttonMenu"
                    onClick={() => setShowNav(!showNav)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <nav className={(showNav) ? 'showNavClass' : 'navigation'}>
                    <ul>
                        {links.map((link) => (
                            <li key={link.id} >
                                <Link to={link.link}> {link.text} </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
