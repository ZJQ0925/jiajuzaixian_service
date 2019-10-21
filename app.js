//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
const bodyParser=require("body-parser");
//2:创建express对象
var app = express();
console.log("服务器创建成功—端口号3000");
//2.1:加载跨域访问组件
const cors = require("cors");
//2.2:配置允许脚手架访问程序
app.use(cors({
    origin:["http://127.0.0.1:3001",
    "http://localhost:3001",
  "http://localhost:4200",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
	],
    credentials:true,//cookie配置，允许客户端携带cookie
}));
app.use(bodyParser.urlencoded({
  extended:false,
}));
//node.js app.js
//加载第三方模块 express-session
const session = require("express-session")
//7.2:对模块配置   
app.use(session({
  secret:"128位随机字符",   //安全字符串
  resave:false,            //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000*60*60*24
  }
}))
//3:指定监听端口3000
app.listen(3000);
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))


//功能一:首页轮播图
app.get("/imagelist",(req,res)=>{
  var sql='SELECT * FROM jj_carousel'
  pool.query(sql,(err,result)=>{
    res.send(result)
  })
});
//获取九宫格
app.get("/sudoku",(req,res)=>{
  var sql='SELECT * FROM jj_sudoku';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})
/* 首页获取3条装修案例 */
app.get("/getcase",(req,res)=>{
  var sql="SELECT * FROM jj_case WHERE id * RAND() limit 3";
  pool.query(sql,(err,result)=>{
    if(err){throw err}
    res.send(result)
  })
})
/* 首页获取装修公司 */
app.get("/getcompany",(req,res)=>{
  var sql="SELECT * FROM jj_company WHERE id * RAND() limit 6";
  pool.query(sql,(err,result)=>{
    if(err){throw err}
    res.send(result)
  })
})
/* 首页获取设计师 */
app.get("/getAuthor",(req,res)=>{
  var sql="SELECT * FROM jj_author WHERE id * RAND() limit 6";
  pool.query(sql,(err,result)=>{
    if(err){throw err}
    res.send(result)
  })
})
/* 获取楼盘信息 */
app.get("/gethouse",(req,res)=>{
  var sql='SELECT * FROM jj_house WHERE id * RAND() limit 6';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})
//获取分类
app.get("/getdraw",(req,res)=>{
  var sql='SELECT * FROM jj_draw';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//用户登录
app.post('/login',(req,res)=>{
  let uname=req.body.uname;
  let upwd=req.body.upwd;
  console.log(uname,upwd)
  let sql='SELECT id,uname,upwd,author FROM jj_users WHERE uname=? AND upwd=?';
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:0,msg:'用户名或密码错误'})
    }
    else{
      //通过session在服务器端将uname保存下来
      req.session.uname=result[0]["uname"]
      //console.log(req.session.uname)
      res.send({code:1,uname:result[0]["uname"]})
    }
  })
})
//用户注销
/**
app.post("/loginout",(req,res)=>{
  req.session.id=undefined;
  res.end();
})
 */
//用户注册验证
app.get('/register',(req,res)=>{
  let uname=req.query.uname;
  let upwd=req.query.upwd;
  let sql="SELECT uname FROM jj_users WHERE uname=?"
  let sql2="INSERT INTO jj_users VALUES(NULL,?,?,null)";
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:2,msg:'该用户名已占用'});
      return;
    }
    else{
        pool.query(sql2,[uname,upwd],(err,result)=>{
          if(err) throw err;
          if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
          }
          else{
            res.send({code:0,msg:"注册失败"})
          }
        })
    }
  })
  
})

//获取装修公司列表分页
app.get("/companylist",(req,res)=>{
 //1:获取参数
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=7}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果出错停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }

 var progress = 0;
 var obj = {code:1};
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(id) AS c FROM jj_company";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql =" SELECT id,img_url,name,title,addr FROM jj_company LIMIT ?,?";
 var offset =parseInt((pno-1)*pageSize);
     pageSize=parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     //7:返回结果
     res.send(obj);
   }
 })
});
//获取设计师列表分页
app.get("/authorlist",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=7}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果出错停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM jj_author";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql ="SELECT id , img_url, name, title, price FROM jj_author LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
      pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      //7:返回结果
      res.send(obj);
    }
  })
 });
 //获取楼盘信息列表页
 app.get("/houselist",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=7}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果出错停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM jj_house";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql ="SELECT id , name , title , addr FROM jj_house LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
      pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      //7:返回结果
      res.send(obj);
    }
  })
 });
//获取案例列表分页
app.get("/caselist",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=5}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果出错停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM jj_case";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql ="SELECT id, img_url, title, sub_title, author, authorPic, heartCount FROM jj_case LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
      pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      //7:返回结果
      res.send(obj);
    }
  })
 });
/* 
//功能三:查找一条新闻详细信息
app.get("/newsinfo",(req,res)=>{
  //参数：id
  var id=req.query.id;
  //查询语句！
  var sql="SELECT id,title,content,ctime,img_url,point FROM xz_news WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result})
  })
  //发送json结果
})
//功能四:分页查找指定新闻下评论列表
app.get("/getcommont",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;  //页码
  var pageSize = req.query.pageSize;//页大小
  var nid = req.query.nid; //新闻id
  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=7}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  obj.uname=req.session.uname;
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM xz_comment WHERE nid = ?";
  nid = parseInt(nid);
  pool.query(sql,[nid],(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,user_name,ctime,";
     sql+=" content";
     sql+=" FROM xz_comment";
     sql+=" WHERE nid = ?";
     sql+=" ORDER BY id DESC";
     sql+=" LIMIT ?,?";
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[nid,offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
});
 //功能五发表评论
 app.post("/addComment",(req,res)=>{
    //获取3个参数；
    var nid=req.body.nid;
    var user_name=req.session.user_name;
    var content=req.body.content;
    //创建sql语句
    var sql="INSERT INTO xz_comment(id, nid, user_name, ctime, content) VALUES (null,?,?,now(),?)";
    $nid=parseInt(nid)
    //返回添加结果
    pool.query(sql,[nid,user_name,content],(err,result)=>{
      if(err) throw err;
      res.send({code:1,msg:"评论发表成功"})
    })
 })

 //功能六  查询商品列表
 app.get("/goodslist",(req,res)=>{
   var obj=[];
    obj.push({id:1,title:"华硕",old:886,now:339,img_url:"http://127.0.0.1:3000/img/banner1.png",resid:112});
    obj.push({id:2,title:"华硕2",old:668,now:332,img_url:"http://127.0.0.1:3000/img/banner2.png",resid:113});
    obj.push({id:3,title:"华硕3",old:886,now:333,img_url:"http://127.0.0.1:3000/img/banner3.png",resid:116});
    obj.push({id:4,title:"华硕3",old:886,now:333,img_url:"http://127.0.0.1:3000/img/banner3.png",resid:119});
    res.send(obj);
 })
 
 //功能七：用户登录
 //功能七:用户登录
app.get("/login",(req,res)=>{
  //1:获取参数 uname,upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:创建正则表达式验证
  //3:创建sql
  var sql = "SELECT count(id) as c";
  sql +=" FROM xz_login";
  sql +=" WHERE uname = ? AND upwd = md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
   if(err)throw err;
   var obj = result[0].c;
   if(obj == 1){
    //7.3:将用户名保存session对象中
    req.session.uname = uname;
    res.send({code:1,msg:"登录成功"});
   }else{
    res.send({code:-1,msg:"用户名或密码有误"}) 
    }  
  });
  //4:返回结果
})

app.get("/addCart",(req,res)=>{
  //1:获取3个参数
  //需要第三方模块支持 bodyParser
  var uid = req.query.uid;
  var pid = req.query.pid;
  var c = req.query.count;
  //2:创建sql语句
  var sql  =" INSERT INTO `xz_shoppingcart_item`(`iid`, `user_id`, `product_id`, `count`, `is_checked`) VALUES (null,?,?,?,0)"

  pool.query(sql,[uid,pid,c],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"购物车添加成功"});
  });
  //3:返回添加结果
})
//功能九:查询购物详细信息
app.get("/getCarts",(req,res)=>{
  //1:获取参数 uname,upwd
  var uid = req.query.uid;
  //3:创建sql
  var sql =" SELECT c.iid,c.user_id,c.count";
  sql +=" ,p.price,p.lname";
  sql +=" FROM xz_laptop p,";
  sql +=" xz_shoppingcart_item c";
  sql +=" WHERE p.lid = c.product_id";
  sql +=" AND c.user_id = ?";
  uid = parseInt(uid);
  pool.query(sql,[uid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
  });
  //4:返回结果
})
//功能十：刷新购物车数量
app.get("/updateCart",(req,res)=>{
  var iid=req.query.iid;
  var count=req.query.count;
  var sql="update xz_shoppingcart_item set count= ? where iid= ? ";
  iid=parseInt(iid);
  count=parseInt(count);
  pool.query(sql,[count,iid],(err,result)=>{
    if(err){throw err}
    if(result.affectedRows>0){
    res.send({code:1,msg:"数量更新成功"})
  }
    else{
      res.send({code:-1,msg:"数量更新错误"})
    }
  })
})
//功能十一：搜索指定商品名称商品列表
app.get("/search",(req,res)=>{
  var keyword=req.query.keyword;
  var low=req.query.low;
  var high=req.query.high;
  var sql="SELECT lid,lname,price FROM xz_laptop WHERE lname LIKE ? AND price>= ? AND price <= ?";
  low=parseFloat(low);
  high=parseFloat(high);
  pool.query(sql,[`%${keyword}%`,low,high],(err,result)=>{
    if(err){throw err}
    if(result.length==0){
      res.send({code:-1,msg:"您搜索的产品不存在"})
    }
    else{
      res.send({code:1,data:result})
    }
  })
}) */