const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
            trim: true,
        },
        service : {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 500,
            trim: true,
        },
        adresse: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
            trim: true,
        },
        phone: {
            type: Number,
            required: true,
            minlength: 9,
            maxlength: 9,
            trim: true,
        },  

    },
    {
        timestamps: true,
    }
);


const PostSchema = mongoose.model('post', postSchema);

module.exports = PostSchema;