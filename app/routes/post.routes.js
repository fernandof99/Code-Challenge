module.exports = (app) => {
    const posts = require('../controllers/post.controller')
    const router = require('express').Router()
    
    router.post('/', posts.create)
    router.put('/:id', posts.update)
    app.use('/api/posts', router)
}