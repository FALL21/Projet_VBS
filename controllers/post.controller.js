const { status } = require('express/lib/response');
const PostModel = require('../models/post.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readPost = (_req, res) => {
    PostModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })

}

module.exports.createPost = async (req, res) => {
    const newPost = new PostModel({
        name: req.body.name,
        service: req.body.service,
        adresse: req.body.adresse,
        phone: req.body.phone,
    });

        try {
            const post = await newPost.save();
            return res.status(201).json(post);
        } catch (err) {
            return res.status(400).send(err);
        }

   


}

module.exports.updatePost = (req, res) => {

}

module.exports.deletePost = (req, res) => {

}