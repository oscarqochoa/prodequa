const mongoose = require('mongoose');

const url = "mongodb+srv://microserviceserver:T9YdkYa8tkVKwwuk@cluster0.rqdwn.mongodb.net/prodequa?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(url)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch(error => console.log(error));
