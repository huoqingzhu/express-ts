"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index_1 = require("./router/Upload/index");
const index_2 = require("./router/User/index");
const index_3 = require("./router/Map/index");
require("./utils/init");
require("./model/mongo");
const app = express();
const port = 9000;
app.use(express.json());
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/api/test', (req, res) => {
    console.log("执行了我");
    res.json({ name: '霍庆祝', age: 24, msg: 0 });
});
app.use('/api/upload', index_1.default);
app.use('/api/user', index_2.default);
app.use('/api/map', index_3.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
