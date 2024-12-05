const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModels.js'), //created model loading here
    bodyParser = require('body-parser');
    
    //moongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Todob');

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

    const routes = require('./api/routes/todoListRoutes.js'); //importing route
    routes(app); //register the route

    app.listen(port);

    console.log('todo list RESTful API server started on: '+ port);