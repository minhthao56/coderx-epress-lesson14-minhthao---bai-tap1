
var shortid = require('shortid');
var db = require('../db');
var express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())

module.exports.postAdd = function(req, res, next){
    if (req.body.name.length>30){
        var err = "Không được nhập quá 30 ký tự"
        res.render('users/add',{
            err: err
        })
    } else {next()}
    
};
module.exports.countcookie = function(req, res, next){
    var cookie = 0;
    if (req.cookie===undefined){
        cookie = cookie+1;
        console.log(cookie)
    }
    res.locals.cookie
next();
}