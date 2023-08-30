import React from 'react';
import '../styles/components/pages/LoginPage.css';

const LoginPage = (props) => {
    return (
        <main className="holder">
            <div>
                <h2>Iniciar sesión</h2>
                <form action="" className="formulario">
                    <p>
                        <label for="usuario">Usuario:</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="contrasena">Contraseña:</label>
                        <input type="password" />
                    </p>
                    <p>
                        <input type="submit" name="" value="Entrar" />
                    </p>
                </form>
            </div>
        </main>
    )
}

export default LoginPage;