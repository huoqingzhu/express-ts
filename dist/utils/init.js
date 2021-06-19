"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyFile = void 0;
const fs = require('fs');
const path = require('path');
exports.emptyFile = (path) => {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file, index) => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                exports.emptyFile(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
const defpath = path.join(__dirname, '../');
console.log(defpath);
exports.emptyFile(defpath + '/uploads');
