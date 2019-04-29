// // grab express 
// var express = require('express');

// // create an express app 
// var app = express();

// // create an express route for the home page
// // http://localhost:8080/
// app.get('/', function(req, res) { 
//     res.sendFile(__dirname + 'index.html'); 
// });

// // start the server on port 8080
// app.listen(8085);
// // send a message
// console.log('Server has started!');
//SIMPLE EXAMPLE OF NODE !!!



//INSTAGRAM API THROUGH NODE APP !!
// GRAB THE PACKAGES/VARIABLES WE NEED 
// ================================================== 
var express = require('express'); 
var app = express();
var ig = require('instagram-node').instagram();

// CONFIGURE THE APP 
// ================================================== 
// tell node where to look for site resources 
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs 
app.set('view engine', 'ejs');

// configure instagram app with your access token 
ig.use({  
    // get access token here: http://instagram.pixelunion.net/  
    access_token: '648787832.1677ed0.d6e4384f90aa48d8b4f1f497455c7dff', 
    });

// SET THE ROUTES 
// ===================================================
// home page route - our profile's images 
app.get('/', function(req, res) {
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) { 
        res.render('pages/index', { grams: medias });   
         });
    // use the instagram package to get our profile's media
    // render the home page and pass in our profile's images 
});

// START THE SERVER 
// ================================================== 
app.listen(8080); 
console.log('App started! Look at http://localhost:8080');







