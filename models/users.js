const mongoose = require('mongoose')

const usersschema = mongoose.Schema({
    Nombres: String,
    Apellidos: String,
    Direccion: String,
    Fecha: String,
    DNI: String,
    Celular:String,
    Comentario:String,
    Precio:String,
    Tipo:String,
    deleted: { type: Boolean, default: false }
},
    {
        timestamps: true
    })


const users = mongoose.model('users', usersschema, 'users')
module.exports = users