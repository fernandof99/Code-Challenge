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

app.get("/users", paginate(Post), (req, res) => { 
    res.json(res.paginatedResult);
  });

  function paginate(model) {
    return async (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
  
      const result = {};
      if (endIndex < (await model.countDocuments().exec())) {
        result.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      try {
        result.results = await model.find().limit(limit).skip(startIndex);
        res.paginatedResult = result;
        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    };
  }
  
require('./app/routes/post.routes')(app)

 const PORT = 8000
 app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`)
 })