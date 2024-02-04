const mongoose = require('mongoose');
const dbConnection = () => {
    mongoose.connect('mongodb+srv://tushar:qwerty1234@cluster0.e8cb1kh.mongodb.net/?retryWrites=true&w=majority').then(() => {
        console.log("DB Connected");
    })
};
module.exports = dbConnection;