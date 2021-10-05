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