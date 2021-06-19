//连接数据库
import mysql = require("mysql");
const db=mysql.createConnection({host: "localhost",
							port: "3306",
							user: "root",
							password: "huo123123",
							database: "mys"
            });
            // let sql = 'SELECT * FROM users';
            // db.query(sql, function(err, result) {
            //   if (err) {
            //       console.log('[SELECT ERROR]：', err.message);
            //   }
            //     console.log(result);
            // })
  if(db){
    console.log("数据库连接成功!")
  }

  export default db