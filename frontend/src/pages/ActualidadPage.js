import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/pages/ActualidadPage.css';
import NovedadItem from '../components/actualidad/NovedadItem';


const ActualidadPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect (() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/actualidad');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <main className="holder">
            <h2>Actualidad</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} equipo={item.equipo}
                        imagen={item.imagen} body={item.cuerpo}/>)
                )
            }
            
        </main>
    )
};

export default ActualidadPage;