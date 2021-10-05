const db = require('../models')
const Post = db.posts

exports.create = (req, res) => {
    if(!req.body){
        res.status(409).send({
            message: err.message || "Content cannot be empty!."
        })
    }
    const post = new Post({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name ? req.body.last_name : "NULL",
        address: req.body.address ? req.body.address : "NULL",
        city: req.body.city ? req.body.city : "NULL",
        province: req.body.province ? req.body.province : "NULL",
        country: req.body.country ? req.body.country : "NULL",
        softDeleted: req.body.softDeleted,
        deletedAt: req.body.deletedAt
    })

    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while create posts."
        })
    })
}

exports.update = (req,res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then ((result) => {
        if (!result){
            res.status(404).send({
                message: "Post not found"
            })
        }
        res.send({
            message: "Post was updated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update posts."
        })
    })
}

exports.delete = (req,res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
    .then((result) => {
        if (!result){
            res.status(404).send({
                message: "Post not found"
            })
        }
        res.send({
            message: "Post was deleted"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while delete posts."
        })
    })
}

exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving posts."
        })
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while show posts."
        })
    })
}

exports.insertBulk = (req, res) => {
    let users = req.body
    Post.collection.insertMany(users,function(err,docs){
        if (err){
            return console.error(err)
        }
        else{
            console.log("Insert Many Data!", docs)
        }
    })
}

exports.updateBulk = (req,res) => {
    const filterupdate = req.query
    Post.updateMany(filterupdate, req.body)
    .then ((result) => {
        if (!result){
            res.status(404).send({
                message: "Post not found"
            })
        }
        res.send({
            message: "Post was all updated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update posts."
        })
    })
}