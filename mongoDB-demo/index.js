const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true})
    .then(()=>console.log('Connected to Mongo DB..'))
    .catch(err=>console.error('Could not connect to MOngo DB...',err))
