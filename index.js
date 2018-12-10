
const express = require("express"),
        bodyParser = require("body-parser"),
         homeRoute = require("./routes/home_route"),
         shortningRoute = require("./routes/shortning_route"),
         Counter = require("./model/counterModel"),
         URL = require("./model/urlModel");
        var app = express();
        
            require("dotenv").config();
        
  const DB = require("./model/db");
    
    // ExpressJS middleware for serving static files
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended:true}));
    
    //require the route files
    app.use(homeRoute);
    app.use(shortningRoute);
   
    
    app.listen(process.env.PORT, function(){
       console.log("server started"); 
    });