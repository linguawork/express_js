/*
endpoints from Router

Описание маршрутов
*/

import  Router  from "express"

//remove and import to Controller
// import Post from "./Post.js"

//вынесли логику файла в Контроллер, перенесли логику коллбека
import PostController from "./PostController.js"

const router = Router()

//crud methods for one route: /posts
//copied the call back function from the index file for post function
//endpoint get: 1st param: address, second - callback f

//теперь коллбек просто имопртировали как класс из файла Контроллер
router.post('/posts', PostController.create)

router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
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