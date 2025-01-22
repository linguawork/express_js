import express from 'express'


console.log('Writing express')
const PORT = 5002
const app = express()


//endpoint get: 1st param: address, second - callback f
app.get('/', (req, res) => {

    //ответ клиенту
    res.status(200).json('Сервер работает снова')
    /*
    При каждом изменении нужно перезапускать сервер.
    Чтобы не перезапускать нужно ввести команду:
    npm i -D nodemon
    
    */

})


app.listen(
    PORT, 
    ()=>console.log(`Server started on port: ${PORT}`)
)