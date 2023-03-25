const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
 mongoose.connect('mongodb://127.0.0.1:27017/mongoose').then(()=>{
console.log('connected to database');
}).catch(()=> {
    console.log('connection error')
})

// module.exports= database