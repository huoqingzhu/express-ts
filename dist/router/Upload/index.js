"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const FileName = "uploads/";
const multer = require('multer');
const upload = multer({ dest: FileName });
router.post('/img', upload.any(), (req, res) => {
    const extname = path.extname(req.files[0].path);
    var newPath = FileName + req.files[0].originalname + extname;
    fs.rename(req.files[0].path, newPath, function (err) {
        if (err) {
            res.send('上传失败');
        }
        else {
            res.send('上传成功');
        }
    });
});
router.post('/binary', (req, res, next) => {
    console.log(req.query);
    let buffers = [];
    req.on('data', (trunk) => {
        buffers.push(trunk);
        console.log(trunk);
    }).on('end', () => __awaiter(void 0, void 0, void 0, function* () {
        const buffer = Buffer.concat(buffers);
        console.log('====================================');
        console.log(buffer);
        console.log('====================================');
        fs.writeFileSync(FileName + req.query.name, buffer);
        res.json({ path: FileName + req.query.name, err: 0 });
    })).on('close', () => {
        console.log("关闭");
    }).on('error', () => {
        console.log("失败");
    });
});
exports.default = router;
