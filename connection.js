const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/prodequa'

mongoose.connect(uri).catch(err=>console.log(err))

const db = mongoose.connection

db.once('open', _ =>{
    console.log('DB connected to',uri);
})

db.on('error', err=> console.log(err))