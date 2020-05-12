const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
var bookRouters = require("./routes/books.route");
var userRouters = require("./routes/users.route");
var transactionsRouters = require("./routes/transactions.route");
var validation = require("./validation/validation.user")


const port = 3000;



app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json())  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Trang chủ
app.get("/", function (req, res){
    res.cookie("user-id",123456)
    res.render("index")    
});

app.use("/books", validation.countcookie,bookRouters);
app.use("/users",validation.countcookie,userRouters);
app.use("/trans", validation.countcookie,transactionsRouters);

//Satic file
app.use(express.static('public'))
// Listening
app.listen(port, function(){
    console.log('Server listen on port' + port);
  });
  