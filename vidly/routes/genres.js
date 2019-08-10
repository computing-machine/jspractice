const Joi = require('@hapi/joi');
const express = require('express')
const router = express.Router()
router.use(express.urlencoded({extended:true}))

//List of movie genres
const genres = [
    {id:1, name:'action'},
    {id:2, name:'romance'},
    {id:3, name:'comedy'},
    {id:4, name:'horror'},
    {id:5, name:'drama'},
]


router.get('/',(req,res)=>{
    res.send(genres)
})

router.get('/:id',(req,res)=>{
    const genre = genres.find(g=>g.id=== parseInt(req.params.id))
    if (genre) return res.send(genre)
    res.status(400).send('ID not found')
})

router.post('/',(req,res)=>{
    const {error} = validateGenre(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length +1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genres)
}) 

router.put('/:id',(req,res)=>{
    const genre = genres.find(g=>g.id=== parseInt(req.params.id))
    if (!genre) return res.status(400).send('ID not found')
    
    const {error} = validateGenre(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    genre.name = req.body.name
    res.send(genres)
})

router.delete('/:id',(req,res)=>{
    const genre = genres.find(g=>g.id=== parseInt(req.params.id))
    if (!genre) return res.status(400).send('ID not found')
    
    const index = genres.indexOf(genre)
    genres.splice(index,1)
    res.send(genres)
})

//Validation function
const validateGenre = (genre)=>{
    const schema = {name:Joi.string().min(4).required()}
    return Joi.validate(genre,schema)
}



module.exports= router