const express = require('express');
const bodyParser = require('body-parser');
const port = 4500;

const app = express();
const server = require('http').createServer(app);

// -- middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -- router 
const authRouter = require('./routes/auth.router');

// -- cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.listen(port, () => {
    console.log("Server is running");
})

app.use('/api/auth', authRouter);
