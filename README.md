# express_js
Project for learning Express_Js framework for Node.js

```
npm init -y

npm i express
```
Express is a popular framework for web apps.

Inside package.json start script (node js) will fire up the project, type module will set import/export to be executed in node js environment

```
"type": "module",

  "scripts": {
    "start": "node index.js"
  },
```
To start the project: npm start



При каждом изменении нужно перезапускать сервер.
Чтобы не перезапускать нужно ввести команду:

```
npm i -D nodemon
```
Установка зависимости позволяет не перезапускать сервер при изменениях в коде
```
  "devDependencies": {
    "nodemon": "^3.1.9"
  }

  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"

  }
```
Для запуска в режиме разработки: npm run dev


*********************************************
14:20
DB part:
enter MongoDB account,
create project,
build cluster (free), 
connect (set permissions for IP addresses),
create a DB user and pass,
connect to app with native drivers,
get the url,
cp the url to your app,

add dependence to work with DB:
npm i mongoose OR npm i mongoDB
```
  "dependencies": {
    "express": "^4.21.2",
    "mongodb": "^6.12.0",
    "mongoose": "^8.9.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
```


***************************************
Об архитектуре кода:
(Слабая связность)

Слои абстракции

1.DAL(data access layer): Слой или модуль доступа к данным 
Например, это может быть Mongoose

2.Controller
Пример Postcontroller: класс с методами для CRUD

3.Service: бизнес-логика, мы в ней ничего не меняем
не связана с клиент-серверным взаимодействием
Например, изменение данных в Базе данныx



***********************************
Uploading files to server
39:22

Install another node package:

```
npm i express-fileupload
```
The package file will look with added dependency:
```
  "dependencies": {
    "express": "^4.21.2",
    "express-fileupload": "^1.5.1",
    "mongodb": "^6.12.0",
    "mongoose": "^8.9.5"
  },
```

Для уникальных id у файла нужно импортировать пакет:
```
npm i uuid
```