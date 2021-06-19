const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path')
const FileName="uploads/"
    //上传图片的模板
const multer = require('multer');
//生成的图片放入uploads文件夹下
const upload = multer({ dest: FileName })
/**
 * form-data 文件上传
 */
router.post('/img', upload.any(), (req, res) => {
    //拿到后缀名
	const extname = path.extname(req.files[0].path);
	//拼接新的文件路径，文件加上后缀名
	var newPath = FileName+req.files[0].originalname + extname;
	//重命名
	fs.rename(req.files[0].path, newPath, function(err){
		if(err){
			res.send('上传失败')
		}else{
			res.send('上传成功')
		}
	})
})
router.post('/binary',(req, res, next) => {
    console.log(req.query);
    let buffers = [];
    req.on('data',(trunk) => {
        buffers.push(trunk);
        console.log(trunk)
    }).on('end',async () => {
        const buffer= Buffer.concat(buffers);
        console.log('====================================');
        console.log(buffer);
        console.log('====================================');
        fs.writeFileSync(FileName+req.query.name, buffer);
        res.json({path:FileName+req.query.name,err:0})
    }).on('close', () => {
        console.log("关闭")
    }).on('error', () => {
        console.log("失败")
    });
})
export default  router;