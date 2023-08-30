import React from 'react';
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div>
                <h2>Contacto</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <br/>
                        <textarea name="mensaje" value={formData.mensaje} rows="10" cols="77" onChange={handleChange}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
        </main>
    )
}

export default ContactoPage;