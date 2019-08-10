const startDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const genres = require('./routes/genres')
const home = require('./routes/home')
const express = require('express')
const app = new express
const {logger} = require('./middleware')
const {authenticate} = require('./middleware')

app.set('view engine','pug')
app.set('views','./views')

app.use(logger)
app.use(authenticate)
app.use(helmet())
app.use('/vidly.com/api/genres',genres)
app.use('/',home)

//Configuration
console.log(`Application name: ${config.get('name')}`)
console.log(`Mail server: ${config.get('mail.host')}`)

if(app.get('env')==='development'){
app.use(morgan('tiny'))
startDebugger('Morgan enabled...')
}

//Db work
dbDebugger('Connected to DB...')

//Port assignment
const port=process.env.port || 3000

//Listener
app.listen(port,()=>console.log(`Listening to port ${port}...`))

