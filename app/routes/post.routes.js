module.exports = (app) => {
    const posts = require('../controllers/post.controller')
    const router = require('express').Router()
    
    router.post('/', posts.create)
    router.put('/:id', posts.update)
    router.delete('/:id', posts.delete)
    router.get('/', posts.findAll)
    router.get('/:id', posts.findOne)
    router.post('/insertbulk', posts.insertBulk)
    router.put('/', posts.updateBulk)
    router.delete('/', posts.deleteBulk)
    router.put('/softdelete', posts.deleteSoft)
    app.use('/api/posts', router)
}