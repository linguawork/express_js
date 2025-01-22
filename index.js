import express from 'express'

//14:48db framework
import mongoose from 'mongoose'

//19:00
import Post from './Post.js'
import { triggerAsyncId } from 'async_hooks'

//23:31 это импорт для регистрации 
import router from './router.js'

//DB. user and admin are automatically replaced in the URL in MongoDB
const DB_URL = 'mongodb+srv://admin:admin@clusterforexpressulbi.ng1yv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterForExpressUlbi'



console.log('Writing express')
const PORT = 5002
const app = express()
//to make send requests of body from user in JSON format
app.use(express.json())

//23:31, регистрация router

/*
 использование ./api в маршруте — 
 это просто вопрос структуры и предпочтений в организации 
 вашего API, то есть URL 

  Когда вы добавляете /api перед маршрутом, 
  это становится частью URL, который вы используете 
  в браузере или в запросах API.

  то есть  
  это слово в браузерной url которая будет стоять перед '/posts
*/
app.use('/api', router)
/* 
post запрос из Postman сработает только по такой URL:
10.13.1.1:5002/api/posts

По другим будет ошибка
*/





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