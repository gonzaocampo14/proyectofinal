import React from 'react';

const RegistroPage = (props) => {
    return (
        <main className="holder">
            <div>
                <h2>Registrarse</h2>
                <form action="" className="formulario">
                    <p>
                        <label for="email">Email:</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label for="usuario">Usuario:</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="contrasena">Contraseña:</label>
                        <input type="password" />
                    </p>
                    <p>
                        <label for="equipo">Seleccione su equipo:</label>
                        <select name="">
                            <option value="river">River Plate</option>
                            <option value="boca">Boca Juniors</option>
                            <option value="racing">Racing Club</option>
                            <option value="independiente">Independiente</option>
                        </select>
                    </p>
                    <p>
                        <input type="submit" value="Registrarme" />
                    </p>
                </form>
            </div>
        </main>
    )
}

export default RegistroPage;