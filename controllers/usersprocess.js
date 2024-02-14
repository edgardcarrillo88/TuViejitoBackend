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

const getSingleUserData = async (req, res) => {
    console.log("ejecutando get single user data");
    const userEmail = req.query.email;
    console.log(userEmail);

    try {
        const userData = await usersmodel.findOne({ correo: userEmail });
        if (userData) {
            console.log('Datos del usuario obtenidos correctamente:', userData);
            res.status(200).json(userData);
        } else {
            console.log('Usuario no encontrado');
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        res.status(500).json({ message: 'Error al obtener datos del usuario' });
    }
};


const deleteuserdata = async (req, res) => {
    console.log("borrando todo");

    try {
        await usersmodel.deleteOne({ _id: req.body._id }); // Buscamos y eliminamos el documento con el ID especificado
        console.log(`Usuario con ID ${req.body._id} eliminado correctamente`);
        res.status(200).send({ message: `Usuario con ID ${req.body._id} eliminado` });
    } catch (error) {
        console.error(`Error al eliminar usuario con ID ${req.body._id}:`, error);
        res.status(500).send({ message: `Error al eliminar usuario` });
    }
}


module.exports = {
    registeruser,
    getuserdata,
    getSingleUserData,
    deleteuserdata,
}



