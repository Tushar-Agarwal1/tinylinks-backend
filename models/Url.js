const mongoose = require('mongoose');
const { Schema } = mongoose;

const UrlSchema = new Schema({
    shortUrl: {
        type: String,
        unique: true,
        require: true

    }, // String is shorthand for {type: String}
    longUrl: {
        type: String,
        require: true,

    }


}, { timestamps: true });

// mongoose.model
const Url = mongoose.model('Url', UrlSchema)
module.exports = Url;