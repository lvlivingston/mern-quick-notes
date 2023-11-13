const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const Note = mongoose.model('Note', noteSchema);

const noteSchema = new mongoose.Schema(
    {
        text: {
        type: String,
        required: true,
        },
        user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model('Note', noteSchema);