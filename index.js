require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()
const port = process.env.PORT

const testObject = [
    {
        name: "test"
    }
]
server.use(express.json())
server.use(cors())

server.get('/', (request, response) => {
    response.json(testObject)
})

server.listen(port, ()=>{
    console.log("I don dey hear you")
})