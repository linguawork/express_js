/*
    Класс создан для переиспользования в других классах

    Этот класс возьмет в себя переиспользуемые части кода
    и благодаря этому его части будут использованы
    для сокращения кода в PostController


    Здесь не зависим от response -request операций
    Только операция с постами в БД
*/
import Post from './Post.js';


//для работв с файом
import fileService from './fileService.js';


class PostService {
    //подали объект
    // 39:04, добавили файл
    async create(post, picture) {
        console.log(`Создаем пост в PostService`);
        console.log(post);

        //берем сохраненный файл
        const fileName = fileService.saveFile(picture)

        //создаем пост
        //перезаписываем объект поста для сохранения картинки
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost
    }

    async getAll() {
        console.log(`Получаем все посты в PostService`);
        // console.log(posts);


            //Creates a find query: gets a list of documents that match filter.
            //Если ничего не подавать в find, то все посты возвращает, массив объектов
            const posts = await Post.find();
            //Switch off BODY in Get request in Postman

            //no need to convert to json, Controller will convert
            // return res.status(200).json(posts); //get all the posts and sending back
            return posts; //get all the posts and sending back

    }

    async getOne(id) {
        console.log(`Finding by id in PostService`);
        console.log(id);
        if (!id) {
            throw new Error('Id не найден');
        }
        const post = await Post.findById(id);
        return post; //get one post and sending back
    }

    //req.body has req._id, it is presented with underline
    async update(post) {
        console.log(`Update по post.id в PostService`);
        //_id is in the postman, underlined id 
        console.log(post._id);
        if (!post._id) {
            throw new Error('Id не найден');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost; //возврат поста
    }

    async delete(id) {
        console.log(`Deleting by id in PostService`);
        console.log(id);
        if (!id) {
            throw new Error('Id не найден');
        }
        /*
            osejs.com/docs/api/model.html#Model.findByIdAndDelete()          
        */
        const post = await Post.findByIdAndDelete(id);
        return post; //возврат поста
    }
}

export default new PostService();
