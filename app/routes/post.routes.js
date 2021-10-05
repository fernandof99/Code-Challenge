module.exports = (app) => {
    const posts = require('../controllers/post.controller')
    const router = require('express').Router()
    
    router.post('/', posts.create)
    router.put('/:id', posts.update)
    router.delete('/:id', posts.delete)
    router.get('/', posts.findAll)
    router.get('/:id', posts.findOne)
    app.use('/api/posts', router)
}