import express from 'express'

//14:48db framework
import mongoose from 'mongoose'

//19:00
import Post from './Post.js'
import { triggerAsyncId } from 'async_hooks'

//DB. user and admin are automatically replaced in the URL in MongoDB
const DB_URL = 'mongodb+srv://admin:admin@clusterforexpressulbi.ng1yv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterForExpressUlbi'



console.log('Writing express')
const PORT = 5002
const app = express()
//to make send requests of body from user in JSON format
app.use(express.json())

//endpoint get: 1st param: address, second - callback f
app.post('/', async (req, res) => {

            /*
            11:35 GET and printing QUERY PARAMETERS
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
    console.log(req.body.name)
    /*
    Если намеренно в Постмане не отправить требуемый ключ
    то постман ничего не отправит.
    Для решения этой проблемы лучше поместить код в блок try-catch
    и тогда в постмане можно увидеть указание на ошибку

    Хотя без блока в консоли с запущенным сервером можно увидеть 
    намек на ошибку
    */
    try {
        
        //19:31запрос от клиента (Postman)
        //19:01 Import Post model
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
    
            //ответ клиенту тоже в Postman(19:31)
            //res.status(200).json('Сервер работает ')
        res.status(200).json(post) // возврат поста
        /*
            Когда отправляем post запрос из Postman
            In Postman можно видеть возврат Post объекта
    
            И в МонгоДБ нажимаем Browse collections in the
            created cluster, the cluster is written in the URL
            и можно увидеть
            2 документа сохраненных в базе данных
            то есть два объекта
        */
    } catch (error) {
        res.status(500).json(error) 
    }


})


//DB part, create a function and place app.listen() inside
async function startApp(){
    try{

/*
    connect DB via mongoose before listening to the port, 
    await operation
    to test try-catch we may change URL

    16:39
    If you're using Mongoose 6.x or later, 
    you don’t need { useUnifiedTopology: true } anymore.
    In Mongoose 6.x and later, you don't need { useNewUrlParser: true }.
*/
await mongoose.connect(DB_URL)

        app.listen(
            PORT, 
            ()=>console.log(`Server started on port: ${PORT}`)
        )
    }catch(e){
        console.log(e)
    }
}



startApp()


/*
    https://whatismyipaddress.com/

    school IP address
    62.176.248.102
*/