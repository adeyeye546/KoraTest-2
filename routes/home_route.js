   var express = require("express"),
   router = express.Router();
   
    // Base route for front-end
    router.get('/', function(req, res) {
        res.sendFile('views/index.html', {
            root: __dirname
        });
    });

    
    
    module.exports = router