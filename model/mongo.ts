const db = require('../config/key').mongoURL2;
const mongoose = require('mongoose')
mongoose.connect(db, {
    user: 'root',
    pass: '123456',
    useNewUrlParser: true,
})
    .then(() => {
        console.log(`数据库连接成功${db}`);
    })
    .catch(err => {
        console.log("连接数据库失败");
    })