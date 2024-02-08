const usersmodel = require('../models/users')
const mongoose = require('mongoose')


const registeruser = async (req, res) => {

    console.log("ejecutando registro de cuidadores");
    console.log(req.body);
    const data = new usersmodel(
        req.body
    );
    await data.save();
    res.status(200).json({ message: 'Datos guardados en la base de datos' });

   
}

const getuserdata = async (req, res) => {

    console.log("ejecutando get all data");
    const data = await usersmodel.find({})
    res.status(200).json(data)

}


const deleteuserdata = async (req, res) => {
    console.log("borrando todo");
    usersmodel.deleteMany({})
        .then(() => {
            console.log('Todos los datos del actual eliminados correctamente');
        })
        .catch((error) => {
            console.error('Error al eliminar documentos:', error);
        });
}


module.exports = {
    registeruser,
    getuserdata,
    deleteuserdata,
}



