import express from 'express'


console.log('Writing express')
const PORT = 5002
const app = express()


//endpoint get: 1st param: address, second - callback f
app.get('/', (req, res) => {

    //ответ клиенту
    res.status(200).json('Сервер работает')

})


app.listen(
    PORT, 
    ()=>console.log(`Server started on port: ${PORT}`)
)