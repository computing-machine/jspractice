const express = require('express')
const router = express.Router()

//List of movie genres
const genres = [
    {id:1, name:'action'},
    {id:2, name:'romance'},
    {id:3, name:'comedy'},
    {id:4, name:'horror'},
    {id:5, name:'drama'},
]

router.get('/',(req,res)=>{
    res.render('index',{title:'My app', message:"Boom boom"})
})

module.exports = router