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
