// require('dotenv').config(); //commonJS
// import 'dotenv/config' // ES modules
// commonJS

// const express = require('express');
// const {router} = require('express');

// module.exports = myfunc;

// exports.myfunc = () => {

// };


// ESM
// import express from 'express';
// import {router} from 'express';

// import * as models from './models';


// export default myClass;
// export {class1, class2};

// export const myFunc = () => {

// };

// импорт нужных библиотек/функций
import 'dotenv/config';
import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import router from './routes/router.js'
import errorHandler from './middleware/errorHandler.js'

const app = express();
app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use('/api', router);
const PORT = process.env.PORT;
// начала асинхронной функции
const start = async() => {
    try {
        // функция запуска сервера
        app.listen(PORT,() => {
    console.log(`Сервер работает на порту ${PORT}`);
        });
         await sequelize.authenticate();
            console.log("Подключение к базе данных выполнено успешно")
         await sequelize.sync();//{alter:true}
    }
    catch(error){
        console.log("не удалось подключиться к базе данных", error);
    };
};
start();

