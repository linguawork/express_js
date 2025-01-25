import * as uuid from 'uuid'

//модуль стандартный с путями
import * as path from 'path'



/*
сохраняем поступивщий файл из post request

В Postman  BODY нужно  подавть через form-data

Файл сперва обрабатываеся в PostController


Для уникальных id у файла нужно импортировать пакет:
npm i uuid

*/


class fileService{

    saveFile(file){
        //43:02
        try {
            const fileName = uuid.v4() + '.jpg'
        
            //нужно добавить папку 'static' в текущую директорию и файл
            const filePath = path.resolve('static', fileName)
            //файл двигаем через путь 
            file.mv(filePath)
            //возвращаем file.jpg
            return fileName     
        }catch (error) {

            console.log(error.message)
        }
    }
}


export default new fileService