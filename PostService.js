/*
    Класс создан для переиспользования в других классах

    Этот класс возьмет в себя переиспользуемые части кода
    и благодаря этому его части будут использованы
    для сокращения кода в PostController


    Здесь не зависим от response -request операций
    Только операция с постами в БД
*/
import Post from './Post.js';

class PostService {
    //подали объект
    async create(post) {
        console.log(`Создаем пост в PostService`);
        console.log(post);
        //создаем пост
        const createdPost = await Post.create(post);
        return createdPost
    }

    async getAll(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            GET req from Postman: `
        );
        console.log(req.body);

        try {
            //Creates a find query: gets a list of documents that match filter.
            //Если ничего не подавать в find, то все посты возвращает, массив объектов
            const posts = await Post.find();
            //Switch off BODY in Get request in Postman
            return res.status(200).json(posts); //get all the posts and sending back
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getOne(id) {
        console.log(`Ищем по id в PostService`);
        console.log(id);

        if (!id) {
            throw new Error('Id не найден');
        }
        const post = await Post.findById(id);
        return post; //get one post and sending back
    }

    async update(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            PUT req from Postman: `
        );
        console.log(req.body);

        try {
            const post = req.body;
            if (!post) {
                return res.status(400).json({ message: 'Id не найден' });
            }

            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
                new: true,
            });
            return res.status(200).json(updatedPost); //возврат поста
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            DELETE req from Postman: `
        );
        console.log(req.body);

        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id не найден' });
            }
            /*
                osejs.com/docs/api/model.html#Model.findByIdAndDelete()          
            */
            const post = await Post.findByIdAndDelete(id);
            return res.status(200).json(post); //возврат поста
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new PostService();
