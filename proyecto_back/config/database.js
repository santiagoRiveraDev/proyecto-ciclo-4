const mongoose = require("mongoose");
const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoString = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoString);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind(console, 'error en la conexion de mongoDB'));
}