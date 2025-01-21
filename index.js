import express from 'express'


console.log('Writing express')
const PORT = 5002
const app = express()
app.listen(
    PORT, 
    ()=>console.log(`Server started on port: ${PORT}`)
)