import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/logo.png" width="100" alt="futbol" />
                <h1>Fútbol X</h1>
            </div>
            <div className="holder">
                <ul>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;