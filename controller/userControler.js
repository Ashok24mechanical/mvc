const models = require('../models/userModel')
const database = require('../config/db')

function getMethod(req,res){
    models.find((err,data)=>{
        if(err){
            console.log(err);
        }else{
           res.json(data);
        }
    });

}
function getone(req,res){
    let data = req.body.phonenumber
    console.log(data);
models.find({}, req.body.phonenumber ,(err,data)=>{
    if(err){
         console.log(err);
        }
    else{
        res.json(data);
    }
});
}

 function postmethod(req,res){
    console.log(req.body);
    var re = new models();
    data = req.body.subject
    console.log(data);
    re.subject = {
    sub1 : data.sub1,
    sub2 :  data.sub2,
    sub3 : data.sub3,
    sub4 : data.sub4,
    sub5 : data.sub5
    },
    // re.sub1 = req.body.sub1
    // re.sub2 = req.body.sub2,
    // re.sub3 = req.body.sub3,
    // re.sub4 = req.body.sub4
    // re.sub5 = req.body.sub5
    re.total = req.body.total,
    re.ak = req.body.ak,
    re.phonenumber = req.body.phonenumber

    re.save((err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Data saved successfully');
        }
    })
   return res.json('Data Recived')
};
 module.exports = {postmethod,getMethod,getone}
//  exports.getMethod = getMethod()
// module.exports={

   
// }