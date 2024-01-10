require(dotenv).config()

const express = require("express")
const app = express()
const mongoose = require("mongoose") 

mongoose.connect(process.env.DATABASE_URL, )


app.get("/" , (request, response) => {
    response.send("hey")
})

app.use(express.json()) 

const todoRouter = require('./routes/todo')
app.use('/todo',todoRouter )

app.listen (7000, () => console.log('server started '))