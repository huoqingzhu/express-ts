import express = require('express')
import bodyParser = require('body-parser');

import Upload from './router/Upload/index'
import User from './router/User/index'
import "./utils/init"//初始化 
const app = express()
const port = 8888
// app.use(express.static(__dirname + '/public/'));
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
  console.log("执行了我")
  res.json( {name:'霍庆祝',age:24,msg:0})
})


app.use('/upload', Upload);
app.use('/api/user',User)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})