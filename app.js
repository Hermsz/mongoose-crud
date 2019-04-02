const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({encoded: false}))

app.use('/', routes)

const mongoose = require(`mongoose`)
mongoose.connect("mongodb://localhost/mongoose", {useNewUrlParser: true})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})



