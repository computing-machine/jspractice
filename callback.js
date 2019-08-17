const fs = require('fs')

console.log('Start Code ...')

fs.readFile('./Test.txt',(err,data)=>{
    if (err){
        throw new TypeError('Call for IT support..')
    }
    const content = data.toString()
    showData(content)

})

console.log('End Code ...')

const showData = content=>{console.log(content)}