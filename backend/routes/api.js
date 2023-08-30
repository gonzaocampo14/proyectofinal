var express = require('express');
var router = express.Router();
var novedadesModels = require('../models/actualidadModels');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/actualidad', async function(req, res, next) {

    let novedades = await novedadesModels.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                heigth: 200,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);

});

router.post('/contacto', async (req, res) => {

    const mail = {
        to: 'gonza.ocampo4@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });

})

module.exports = router;