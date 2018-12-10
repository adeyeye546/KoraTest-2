    var mongoose = require("mongoose"),
     URL = require("./urlModel"),
      Counter = require("./counterModel");
      var promise;
      
 promise = mongoose.connect(process.env.connectionString,{ useNewUrlParser: true });
    
   // Reset the app to default values when starting the server
//
// WARNING: Do this only when you want a fresh instance of the application else
// comment the code.
promise.then(function(db) {
    console.log('APP: Connected to MongoDB');
    URL.deleteMany({}, function() {
        console.log('APP: URL collection emptied');
    })
    Counter.deleteMany({}, function() {
        console.log('APP: Counter collection emptied');
        console.log('APP: Initializing Counter collection with a default value');
        var counter = new Counter({_id: 'url_count', count: 10000});
        counter.save(function(err) {
            if(err) {
                console.error('APP: Error while initializing counter');
                return console.error(err);
            }
            console.log('APP: Counter has been initialized');
        });
    });
});