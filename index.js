var express = require('express')
const bodyParser = require('body-parser');
const ConnectDB = require('./Database/dbConnect');
const  route  = require('./Route/app');
const path = require('path')
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
ConnectDB("mongodb://localhost:27017/MetroGhar")

// const staticPath = path.join(__dirname,'./public/uploads');
// app.use(express.static(staticPath))
app.use(express.static('./public/uploads'))

app.set('view engine','ejs')
app.set('views','./Views')
app.use('/',route)

const port = 8081
app.listen(port,()=>{
    console.log(`serving running at port ${port}`);
})