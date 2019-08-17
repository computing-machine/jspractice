const fs = require('fs')

console.log('Start Code ...')

const readFilePromise = (file){
    return new Promise((resolve,reject)=>{
        fs.readFile('./Test.txt',error=>{
            if (error) reject(new TypeError('Eroor in data..'))
            resolve(data) 
        })
    }
}


console.log('End Code ...')

const showData = content=>{console.log(content)}