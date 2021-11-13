const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    usuario:{ type:String, require:true, max: 100},
    pass:{ type:String, require:true, max: 100}
})

module.exports = mongoose.model('usuarios', usuarioSchema);