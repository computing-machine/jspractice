const EventEmitter = require('events');

class Yoyo extends EventEmitter{
    someone(message){
        console.log(message)
        this.emit(message,{id:1,url:'http://'})
    }
}

module.exports=Yoyo;