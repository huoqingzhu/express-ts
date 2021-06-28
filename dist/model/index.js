"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const db = mysql.createConnection({ host: "localhost",
    port: "3306",
    user: "root",
    password: "huo123123",
    database: "mys"
});
if (db) {
    console.log("数据库连接成功!");
}
exports.default = db;
