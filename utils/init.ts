const fs = require('fs');
const path=require('path');
/**
 * 清空指定文件下的所有文件
 * @param path 
 */
export const emptyFile=(path:string)=>{
  let files = [];
  if(fs.existsSync(path)){
      files = fs.readdirSync(path);
      files.forEach((file, index) => {
          let curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()){
            emptyFile(curPath); //递归删除文件夹
          } else {
              fs.unlinkSync(curPath); //删除文件
          }
      });
      fs.rmdirSync(path);
  }
}
const defpath=path.join(__dirname,'../');
console.log(defpath)
emptyFile(defpath+'/uploads')