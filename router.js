/*
endpoints from Router

Описание маршрутов
*/

import  Router  from "express"
import Post from "./Post.js"

const router = Router()

//crud methods for one route: /posts
//copied the call back function from the index file for post function
//endpoint get: 1st param: address, second - callback f
router.post('/posts', async (req, res) => {

    console.log(req.body)

    try {
        //19:31запрос от клиента (Postman)
        //В постмане создается объект именно с этими полями
        //Он приходит в body
        const {author, title, content, picture} = req.body
        
        /* 
            Import Post model: (как шаблон) примеряет на себя боди.
            модель Mongoose сама по себе не выполняет глубокую 
            валидацию данных перед их сохранением (например, 
            не проверяет длину строки или формат содержимого), 
            но она гарантирует, что передаваемые данные будут 
            соответствовать базовой структуре (например,
            author — это строка, а picture — строка, 
            но она может быть пустой).

            выполняет создание нового документа в базе данных 
            на основе данных, переданных в req.body. Это можно 
            рассматривать как своего рода "проверку соответствия"
             или "проверку формата" — когда данные 
             из запроса проверяются на соответствие шаблону 
             (модели Post).
        */
        const post = await Post.create({author, title, content, picture})

        //ответ клиенту тоже в Postman(19:31)
        //res.status(200).json('Сервер работает ')
        res.status(200).json(post) //возврат поста
    } catch(error) {
        res.status(500).json(error) 
    }
})

router.get('/posts')
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')

export default router

/*
    in a RESTful API, CRUD methods (Create, Read, Update, and Delete)
    can be applied to different routes or resources. In your example,
    the /posts route is being used to handle the CRUD operations 
    for "posts." This is a typical design pattern where each 
    resource (e.g., posts, users, comments, etc.) has its own set 
    of routes that map to the appropriate HTTP methods.
*/

/*
    You can repeat the same CRUD methods for different resources.
    For instance:
        // For 'posts' resource
        router.post('/posts');
        router.get('/posts');
        router.get('/posts/:id');
        router.put('/posts/:id');
        router.delete('/posts/:id');

        // For 'users' resource
        router.post('/users');
        router.get('/users');
        router.get('/users/:id');
        router.put('/users/:id');
        router.delete('/users/:id');

        // For 'comments' resource
        router.post('/comments');
        router.get('/comments');
        router.get('/comments/:id');
        router.put('/comments/:id');
        router.delete('/comments/:id');
*/