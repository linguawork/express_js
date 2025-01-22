import express from 'express'


console.log('Writing express')
const PORT = 5002
const app = express()


//endpoint get: 1st param: address, second - callback f
app.get('/', (req, res) => {

    // query parameters при запросе от клиента
    // ?test=123&query=asfasf&third=addsa 
    console.log(req.query)
    console.log(req.query.test)

    /*
        http://localhost:5002/?test=123&query=asfasf&third=addsa
        will output:
        { test: '123', query: 'asfasf', third: 'addsa' }
         123
    
    */


    //ответ клиенту
    res.status(200).json('Сервер работает ')
    /*
    При каждом изменении нужно перезапускать сервер.
    Чтобы не перезапускать нужно ввести команду:
    npm i -D nodemon


    "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"

    }
    
    Для запуска в режиме разработки: npm run dev
    
    */

})


app.listen(
    PORT, 
    ()=>console.log(`Server started on port: ${PORT}`)
)