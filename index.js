import express from 'express'


console.log('Writing express')
const PORT = 5002
const app = express()
//to make send requests of body from user in JSON format
app.use(express.json())

//endpoint get: 1st param: address, second - callback f
app.post('/', (req, res) => {

            /*11:35 GET and printing QUERY PARAMETERS
                // query parameters при запросе от клиента
                // ?test=123&query=asfasf&third=addsa 
                console.log(req.query)
                console.log(req.query.test)

                    http://localhost:5002/?test=123&query=asfasf&third=addsa
                    will output:
                    { test: '123', query: 'asfasf', third: 'addsa' }
                    123     
            */

    /*12:18 
        sending body via post request from Postman to see the body
        
        send: 10.13.1.1:5002
        we send the body in JSON format (/BODY/RAW/JSON)

        we get: undefined, why? Because express can not
        automatically handle JSON format
        we need to use:
        app.use(express.json())

        Output is the body we sent:
        { name: 'Тест', username: 'areggie42' }
    */
    console.log(req.body)
    

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