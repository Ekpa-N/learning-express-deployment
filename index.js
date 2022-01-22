const express = require('express')
const cors = require('cors')

const server = express()

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

server.listen(4000, ()=>{
    console.log("I don dey hear you")
})