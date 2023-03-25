
function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 0; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i+1; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();


function reverseString() {
    var newString = "";
    var str = 'hello'
    for (var i = str.length-1 ; i >= 0 ; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    // for (var i = str.length-1 ; i >= 0; i--) { 
    //     newString += str[i]; // or newString = newString + str[i];
    // }
    console.log(newString);
}
reverseString();

let arr = [1,2,3,5,4,6,8,10,67]

fil = arr.filter((ar=>{
    if(ar % 2 !== 0){
        return ar
    }
}))
console.log(`ODD NUMBER : ${fil[2]}`);

str = 'ashok';
rev = str.split('').reverse().join('');
console.log(rev);

let array = [1,1,8,1,1,2,3,4,4,5,7,8,9,0]
filter = array.filter((ar,dup)=>{
   return array.indexOf(ar) !== dup
})

console.log(filter);

  larg = array.sort((a,b)=>b-a)
  console.log(larg);

function Filter(){
    dtr = ''
n=5
    for(let i=0;i<n;i++){
        for(let j=0; j < n ; j++){
            dtr += '*'
        }
        dtr += '\n'
    }
    console.log(dtr);
}
Filter()
let employees=[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
]
fin = employees.sort((a,b) => {
    if(a.name < b.name){
return -1
    }
})
datas = fin[0].name
email = fin[0].email
datas1 = fin[1].name
email1 = fin[1].email
datas2 = fin[2].name
email2 = fin[2].email
age = fin[2].age+1
console.log(age);
ibj = {}
for(let i=0; i< employees.length; i++){
   ibj[employees[i].name] =employees[i].age + 1
}
console.log(ibj);


obj = [{datas:email},{datas1:email1},{datas2:email2}]
console.log(fin);
console.log(datas);
console.log(email);
console.log(obj);


function factorialize(){

    let n= 5
    if(n===0 || n===1){
        return 1
    }
    for(let i = n-1 ; i>= 1 ; i--){
        n+=i
        // console.log(n);
    }
    console.log(n);
}
factorialize()

function reverse(){
    str = ''
   let data = 'ashok'
    
        for (let i = data.length-1 ;i>= 0 ;i--){
            str += data[i]
            // console.log(str);
        }
      console.log(str);
    
}
reverse()
arrays = [2,4,66,7,7,9,9,3,33,335]
 sort = arrays.sort((a,b)=>{
return a%2- b%2 || b-a
 })
 console.log(sort);
minVal = Infinity
for (let i = 1; i < arrays.length; i++) {
        if (arrays[i] > minVal) {
          minVal = arrays[i];
        }
    }
    console.log(minVal);

    let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4];
    stri = ['w','e','l','c','o','m','e']
let count = {};
for (let i = 0; i < stri.length; i++) {
    count[stri[i]] = (count[stri[i]] || 0) + 1;
}
console.log(count);
