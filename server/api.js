// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();
// 引入文件模块
const fs = require('fs');
// const email = require('./email')

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Login({
        username : req.body.username,
        useremail: req.body.useremail,
        password : req.body.password
    });

    let existUserName = {
        username :req.body.username,
    }
    let existUserEmail = {
        useremail :req.body.useremail,
    }

    let ifexistUserName = models.Login.find(existUserName).exec()
    let ifexistUserEmail = models.Login.find(existUserEmail).exec()

    Promise.all([ifexistUserName,ifexistUserEmail]).then((results) => {
        if(results[0].length === 0 && results[1].length === 0){
            newAccount.save((err,data) => {
                if(err){
                    res.send(err)
                }else{
                    res.send('0');
                }
            })
        }else{
            res.send('1')
        }
    })
    

});
// 获取已有账号接口
router.post('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    let existUser = {
        useremail :req.body.useremail,
        password :req.body.password
    }
    models.Login.find(existUser,(err,data) => {
        if (err) {
            res.send(err);
        } else{
            if(data.length == 0){
                res.send('1');
            }
            else{
                res.send(data);
            }
        }
    });
});

// 创建消息
router.post('/api/commet/createcommet',(req,res) => {

    let imgcollectionsrc = req.body.imgcollectionsrc;
    console.log(imgcollectionsrc)
    let base64Data = imgcollectionsrc.replace(/^data:image\/\w+;base64,/, "");
    let dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile(`imgdb/${req.body.imgcollectionname}`, dataBuffer, function(err) {
		if(err){
		  res.send(err);
		}else{
		  res.send("保存成功！");
		}
	});   
    // let newUserCommet = new models.Usercontent({
    //     username : req.body.username,
    //     useremail: req.body.useremail,
    //     imgcollectionname : req.body.imgcollectionname,
    //     imgcollectionsrc : req.body.imgcollectionsrc,
    //     imgcollectionsize: req.body.imgcollectionsize,
    //     content: req.body.content,
    //     editdate: req.body.editdate,
    // });

    // newUserCommet.save((err,data) => {
    //     if(err){
    //         res.send(err)
    //     }
    //     else{
    //         res.send(data)
    //     }
    // });
});

// 获取消息
router.post('/api/commet/getcommet',(req,res) => {
    models.Usercontent.find((err,data) => {
        if (err) {
            res.send(err);
        } else{
             res.send(data);
        }
    });
});

router.post('./api/headinfo/createheadinfo',(req,res) => {
});

router.post('./api/headinfo/getheadinfo',(req,res) => {

});
















// 邮箱注册
// router.get('/api/login/sendsms',(req,res) => {
//     let eamilTxt = {
//      // 发件人
//      from: 'HarryZhangV@126.com',
//      // 主题
//      subject: '测试',
//      // 收件人
//      to: '1562055324@qq.com',
//      // 邮件内容，HTML格式
//      text: '<p>验证码：1212</p>' //接收激活请求的链接       
//     }

//     email(eamilTxt)
// });

module.exports = router;