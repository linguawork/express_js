/*
    Когда вы пишете import Post from './Post.js', 
    указание расширения .js становится обязательным в 
    некоторых ситуациях, особенно в модулях ES6 (ES Modules). 
    Это связано с тем, как браузеры и некоторые среды выполнения 
    (например, Node.js) обрабатывают модули. Давайте разберемся,
    почему это происходит:

    Стандарты ES Modules: В спецификации ES6 (ECMAScript 2015) 
    для работы с модулями используется точное указание путей к файлам,
    включая расширение. То есть, если вы используете модули, 
    вам нужно явно указать, что это JavaScript файл, добавив .js 
    в конце.

    Совместимость с браузерами: Браузеры, которые поддерживают 
    ES6 модули, также требуют указания расширения в пути к файлу. 
    Если расширение не указано, браузер не сможет корректно найти файл,
    даже если это JavaScript. Например, в Node.js раньше можно было 
    не указывать расширение, и Node автоматически добавлял .js, 
    но в современных версиях Node, когда используется стандарт 
    ES Modules, тоже требуется точно указать расширение.

    Node.js и строгие модули: В последних версиях Node.js, 
    когда вы используете модули (например, через "type": "module" в 
    package.json), Node тоже ожидает явное указание расширения при 
    импорте. Это предотвращает неопределенность и улучшает 
    совместимость с браузерами.

    Хотя в некоторых случаях (например, в старых версиях Node.js
    или при использовании CommonJS) можно не указывать расширение, 
    в современных реализациях ES6 модулей это стало обязательным.
*/

//обязательно писать .js
import Post from './Post.js';

//25:22 Интересно что в классе просто функции, конструктора нет


//34:21
import PostService from './PostService.js';

class PostController {
    //not an arrow function in class, to keep: this
    async create(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            post req from Postman: `
        );
        // console.log(req.body);

        try {
            //19:31запрос от клиента (Postman)
            //В постмане создается объект именно с этими полями
            //Он приходит в body

            //34:27 Удаляем деструктуризацию так как импортируем PostService 
            // const { author, title, content, picture } = req.body;

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
           //изменяем код под PostService
            //было
            // const post = await Post.create({ author, title, content, picture });
            
            //стало: создаем пост, который пришел в req.body
            const post = await PostService.create(req.body);

            //ответ клиенту тоже в Postman(19:31)
            //res.status(200).json('Сервер работает ')
            res.status(200).json(post); //возврат поста
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            GET all req from Postman: `
        );

        try {
            //Creates a find query: gets a list of documents that match filter.
            //Если ничего не подавать в find, то все посты возвращает, массив объектов
            const posts = await PostService.getAll();
            //Switch off BODY in Get request in Postman

            return res.status(200).json(posts); //get all the posts and sending back
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getOne(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            GET req from Postman
            for one id: `
        );
        // console.log(req.body);

        try {
            //сокращение через  PostService.getOne
            const id_post = await PostService.getOne(req.params.id);
            return res.status(200).json(id_post); //get all the posts and sending back
        } catch(error) {
            res.status(500).json(error);
        }
    }

    async update(req, res) {
        console.log(
            `Dont forget to run: npm run dev
            Содержание тела запроса от клиента,
            PUT req from Postman: `
        );
        console.log(req.body);// id in request.body is _id (with underline)

        try {
            /*
                Creates a findOneAndUpdate query, filtering by the given _id.
                1st parameter: id, 
                2nd: update
                3d: options
                https://mongoosejs.com/docs/tutorials/findoneandupdate.html
            */
            const updatedPost = await PostService.update(req.body);//внутри body уже декомпозицию делает
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
            /*
                osejs.com/docs/api/model.html#Model.findByIdAndDelete()          
            */
            const post = await PostService.delete(req.params.id);
            return res.status(200).json(post); //возврат поста
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

//интересно что экспортируем инициализацию экземпляра класса
export default new PostController();
