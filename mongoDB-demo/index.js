const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true})
    .then(()=>console.log('Connected to Mongo DB..'))
    .catch(err=>console.error('Could not connect to MOngo DB...',err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    date:{type:'date',default:date.now},
    tags:[String],
    isPublished: Boolean
})

async function creatCourse(){
    const Course = mongoose.model('Course',courseSchema)
const course = new Course({
    name: 'Node JS',
    author: 'Uzair Malik',
    tags:['JS','Backend'],
    isPublished: true
})

const result = await course.save()
console.log(result)
}

creatCourse()

