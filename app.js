const express = require('express')
const cors = require('cors')

const app = express()

 app.use(express.json())
 app.use(express.urlencoded({ 
     extended: true
}))

//konek ke mongoDB (noSQL)
const db = require('./app/models/')
const Post = db.posts
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Database connected!`)
    }).catch((err) => {
        console.log(`Cannot connect to the database!`, err)
        process.exit()
    })

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to My Project"
    })
})
  
require('./app/routes/post.routes')(app)

 const PORT = 8000
 app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`)
 })