import express = require('express')
import bodyParser = require('body-parser');
const mongoose = require('mongoose')
import Upload from './router/Upload/index'
import User from './router/User/index'
import Map from './router/Map/index'
import "./utils/init"//初始化 
import './model/mongo'
const app = express()
const port = 8888
app.use(express.json())
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 解析body数据 'Content-Type': 'application/x-www-form-urlencoded'
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/api/test', (req, res) => {
  res.json( {name:'test',age:24,msg:0})
})
// 上传接口
app.use('/api/upload', Upload);
// 用户接口
app.use('/api/user',User)
// 爬取高德地图数据
app.use('/api/map',Map)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})