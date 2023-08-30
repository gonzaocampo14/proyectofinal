var express = require('express');
var router = express.Router();
var novedadesModels = require('../../models/actualidadModels');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {
  var novedades = await novedadesModels.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 60,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.render('admin/actualidad', {
    layout: 'admin/layout',
    logueado: req.session.nombre,
    novedades
  });
});

router.get('/new', (req, res, next) => {
  res.render('admin/new', {
    layout: 'admin/layout'
  })
})

router.post('/new', async (req, res, next) => {
  try {

    var img_id = '';

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.equipo != "" && req.body.cuerpo != "") {
      await novedadesModels.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/actualidad')
    } else {
      res.render('admin/new', {
        layout: 'admin/layout',
        error: true,
        message: 'Complete todos los campos'
      })
    }
  } catch (error) {
    res.render('admin/new', {
      layout: 'admin/layout',
      error: true,
      message: 'La novedad no se agrego'
    })
  }
})

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;

  let novedad = await novedadesModels.getNovedadesById(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }

  await novedadesModels.deleteNovedad(id);
  res.redirect('/admin/actualidad');

});

router.get('/edit/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModels.getNovedadesById(id);

  res.render('admin/edit', {
    layout: 'admin/layout',
    novedad
  })

});

router.post('/edit', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      equipo: req.body.equipo,
      cuerpo: req.body.cuerpo,
      img_id
    }


    await novedadesModels.modificarNovedad(obj, req.body.id);
    res.redirect('/admin/actualidad');

  } catch (error) {
    res.render('admin/edit', {
      layout: 'admin/layout',
      error: true,
      message: 'No fue posible modificar'
    })
  }
});

module.exports = router;