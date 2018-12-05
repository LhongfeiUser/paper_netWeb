let express = require('express');
let cors = require('cors');
let mutipart= require('connect-multiparty');
let bodyParser = require('body-parser');
let app =express();
let mutipartMiddeware = mutipart();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


//单篇论文上传
app.post('/upload/single_upload',mutipartMiddeware,(req,res)=>{
  console.log(req.files);
  res.send({msg:'success'});
});

app.post('/upload/single_img',(req,res)=>{
  console.log(req.body);
  res.send({msg:'success'});
});
app.post('/login',(req,res)=>{
  res.send({code:200});
});
//验证码
app.get('/upload/sing_auth',(req,res)=>{
  let {phone_num} =req.query;
  console.log(phone_num);
  res.send({auth:1234})
});

//支付
app.get('/upload/apply',(req,res)=>{
  res.send({Qr:'http://pic19.nipic.com/20120308/4970979_102637717125_2.jpg'})
});

app.listen(3000,()=>{
  console.log('success');
});

//下载报告 查询结果
app.get('/upload/down',(req,res)=>{
  let {order} =req.query;
  console.log(order);
  res.send({msg:'success'})
});
