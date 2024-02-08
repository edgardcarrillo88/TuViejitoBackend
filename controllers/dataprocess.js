const datamodel = require('../models/data')
const mongoose = require('mongoose')


const registerservice = async (req, res) => {

    console.log("ejecutando registro de servicios");
    console.log('req.body:', req.body);
    console.log(req.body.Limitantes);

    const Limitantes = Array.isArray(req.body.Limitantes) ? req.body.Limitantes : [req.body.Limitantes];

    const dataPrincipal = new datamodel({
        Usuario: req.body.Usuario,
        Direccion: req.body.Direccion,
        PersonaAtendida: req.body.PersonaAtendida,
        Comentarios: req.body.Comentarios,
        FechaHora: req.body.FechaHora,
        Tiempo: req.body.Tiempo,
        Cuidador: req.body.Cuidador,
        Limitantes,
    });
    await dataPrincipal.save();

    res.status(200).json({ message: 'Datos guardados en la base de datos' });
}

const getservicedata = async (req, res) => {

    console.log("ejecutando get all data");
    const data = await datamodel.find({})
    res.status(200).json(data)

}


const deleteservicedata = async (req, res) => {
    console.log("borrando todo");
    datamodel.deleteMany({})
        .then(() => {
            console.log('Todos los datos del actual eliminados correctamente');
        })
        .catch((error) => {
            console.error('Error al eliminar documentos:', error);
        });
}


module.exports = {
    registerservice,
    getservicedata,
    deleteservicedata,
}



