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
const axios_1 = require("axios");
const FileName = "/geo";
const List = [{ "adcode": 110000, "name": "北京市" }, { "adcode": 120000, "name": "天津市" }, { "adcode": 130000, "name": "河北省" }, { "adcode": 140000, "name": "山西省" }, { "adcode": 150000, "name": "内蒙古自治区" }, { "adcode": 210000, "name": "辽宁省" }, { "adcode": 220000, "name": "吉林省" }, { "adcode": 230000, "name": "黑龙江省" }, { "adcode": 310000, "name": "上海市" }, { "adcode": 320000, "name": "江苏省" }, { "adcode": 330000, "name": "浙江省" }, { "adcode": 340000, "name": "安徽省" }, { "adcode": 350000, "name": "福建省" }, { "adcode": 360000, "name": "江西省" }, { "adcode": 370000, "name": "山东省" }, { "adcode": 410000, "name": "河南省" }, { "adcode": 420000, "name": "湖北省" }, { "adcode": 430000, "name": "湖南省" }, { "adcode": 440000, "name": "广东省" }, { "adcode": 450000, "name": "广西壮族自治区" }, { "adcode": 460000, "name": "海南省" }, { "adcode": 500000, "name": "重庆市" }, { "adcode": 510000, "name": "四川省" }, { "adcode": 520000, "name": "贵州省" }, { "adcode": 530000, "name": "云南省" }, { "adcode": 540000, "name": "西藏自治区" }, { "adcode": 610000, "name": "陕西省" }, { "adcode": 620000, "name": "甘肃省" }, { "adcode": 630000, "name": "青海省" }, { "adcode": 640000, "name": "宁夏回族自治区" }, { "adcode": 650000, "name": "新疆维吾尔自治区" }, { "adcode": 710000, "name": "台湾省" }, { "adcode": 810000, "name": "香港特别行政区" }, { "adcode": 820000, "name": "澳门特别行政区" }];
const province = [];
router.get('/', (req, res) => {
    res.json({ msg: 0 });
});
const getData = (list) => __awaiter(void 0, void 0, void 0, function* () {
    for (let item of list) {
        const value = yield getList(item);
        if (value) {
            province.push(value);
        }
    }
    return "ok";
});
const getList = (item) => __awaiter(void 0, void 0, void 0, function* () {
    if (!item)
        return false;
    let value;
    try {
        const { data } = yield axios_1.default.get(`https://geo.datav.aliyun.com/areas_v3/bound/${item.adcode}.json`);
        value = data;
        console.log(item.name + "请求成功");
    }
    catch (error) {
        console.log(item.name + "请求失败");
    }
    try {
        yield write(`./geo/${item.adcode}.json`, JSON.stringify(value));
        console.log(item.name + "写入成功");
    }
    catch (error) {
        console.log(item.name + "写入失败");
    }
    return "ok";
});
function write(value, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(value, data, (err) => {
            if (err) {
                reject(value + '写入失败');
            }
            resolve(value + '写入成功');
        });
    });
}
exports.default = router;
