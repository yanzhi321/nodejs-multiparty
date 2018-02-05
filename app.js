const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const router = express.Router()
// const favicon = require('serve-favicon')
const favicons = require('connect-favicons');

//引入routers文件下的index.js
const index = require('./routers/index')
//app.use挂载routers文件下的index.js
app.use('/', index)

//引入routers/admin/admin.js
const admin = require('./routers/admin/admin')
//app.use挂载
app.use('/admin', admin)

//引入routers/user/register.js
const register = require('./routers/user/register')
//app.use挂载
app.use('/register', register)

//引入routers/user/login.js
const login = require('./routers/user/login')
//app.use挂载
app.use('/login', login)

//引入routers/user/upload.js
const upload = require('./routers/user/upload')
//app.use挂载
app.use('/upload', upload)

//app.set模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//connect-favicon--create new favicon,change the first favicon
// https://github.com/theworkers/connect-favicons
app.use(favicons(__dirname + '/public/icons'));
app.use(express.static(path.join(__dirname, '/public')));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//     res.render('test', {
//         list: 'render ejs'
//     })
// })

// app.set('views', path.join(__dirname, 'html'))
// app.engine('html', require('ejs').renderFile);  
// app.set('view engine', 'html');  

// app.get('/', function(req, res) {  
    
//     res.render('index', {text: 'hello world'} ) 
// })  


app.listen(3003, function(){
	console.log("success listening is 3003")
})