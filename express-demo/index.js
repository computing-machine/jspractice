const Joi = require('@hapi/joi');
const express = require('express');

const app = new express()

app.use(express.json())

 const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]

app.get('/',(req,res)=>{
    res.send('Hello world!!!')
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id))
    if (course) return res.send(course)
    res.status(404).send('ID not matched')
})

app.post('/api/courses',(req,res)=>{
    const result = validateCourse(req.body)
    const {error} = validateCourse(req.body) 
    if (error) return res.status(400).send(error.details[0].message)

    const course = {
        id: courses.length +1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses)
}) 

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id))
    if (course){
        const result = validateCourse(req.body)
        const {error} = validateCourse(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        course.name = req.body.name
        res.send(courses)   
    } 
    res.status(404).send('ID not matched')
})

app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id))
    if (course){
        const index = courses.indexOf(course)
        courses.splice(index,1)
        res.send(course)
    } 
    res.status(404).send('ID not matched')
})


const validateCourse = (course)=> {
    const schema = {name: Joi.string().min(3).required()}
    return Joi.validate(course,schema)
}

const port = process.env.PORT||3000  
app.listen(port,()=>{console.log(`Listening to ${port}...`)})
