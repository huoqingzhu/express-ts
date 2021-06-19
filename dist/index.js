"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("./utils/init");
const app = express();
const port = 3000;
const upload_1 = require("./router/upload");
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/index.html');
});
app.use('/upload', upload_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
