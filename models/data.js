const mongoose = require('mongoose')

const dataschema = mongoose.Schema({
    Usuario: String,
    Direccion: String,
    PersonaAtendida: String,
    Comentarios: String,
    Limitantes: [],
    FechaHora: String,
    Tiempo: Number,
    Cuidador:String,
    deleted: { type: Boolean, default: false }
},
    {
        timestamps: true
    })


const data = mongoose.model('data', dataschema, 'data')
module.exports = data