
const path = require('path');
const express = require('express')

const template = require("art-template");
const app = express()
// 导入数据库数据
const music = require(path.join(__dirname, "data/music.js"));


//设置静态资源根目录
app.use(express.static(path.join(__dirname, "WWW")))
// 创建服务请求
app.get('/list.html', (req, res) => {
    var html = template(path.join(__dirname, "WWW/html/list.html"), {
        music
    });
    res.send(html)
})
app.listen(3000,()=>console.log('启动成功'));
