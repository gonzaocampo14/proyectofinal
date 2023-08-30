import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/pages/EquiposPage.css';

const EquiposPage = (props) => {
    return (
        <main className="holder">
            <h2>Clubes</h2>
            <div className="equipos">
                <ul>
                    <li><Link to="/riverplate">River Plate</Link><img src="./images/river.jpg" width="40" alt="escudo river" /></li>
                    <li><Link to="/bocajuniors">Boca Juniors</Link><img src="./images/voka.jpg" width="40" alt="escudo boca" /></li>
                    <li><Link to="/racing">Racing club</Link><img src="./images/racing.jpg" width="25" alt="escudo racing" /></li>
                    <li><Link to="/independiente">Independiente</Link><img src="./images/independiente.jpg" width="25" alt="escudo independiente" /></li>
                </ul>
            </div>
        </main>
    )
}

export default EquiposPage;