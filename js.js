
arr = [23, 3994, 29309, 389938, 389320, 3, 38932]
let result = arr.sort((a, b) => b-a).reverse()[1]
console.log(result);


var array = [3, 6, 2, 56, 32, 5, 89, 32]
let odd = array.filter((data) => {
    return data % 2 !== 0;
})
console.log(odd);
arrr = array.sort((a, b) => a - b)
console.log(arrr[1]);
let arry = [1, 2, 3, 4, 5]
max = arry[0]
var maxval = arry.reduce((a, b) => Math.max(a, b))
console.log(maxval);
for (let i = 0; i < arry.length; i++) {
    if (arry[i] > max) {
        max = arry[i]
    }
}
console.log(max);
largest = array.sort((a, b) => a - b).reverse()[0];
console.log(largest);
let string = 'hello'
let split = string.split('').reverse().join('');
console.log(split);
// let reverse = split.reverse()
// console.log(reverse);

// let join = reverse.join('')
// console.log(join);


var arr = [3, 9, 9, 0, 2, 5, 7]

let dup = arr.filter((data, dupl) => arr.indexOf(data) !== dupl)

console.log(dup);

num = 3 + 4 + '89'
console.log(typeof num);

console.log(typeof 877);
console.log(typeof '678');
console.log(typeof 'koo');

const aay = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = aay.filter((item, index) => aay.indexOf(item) !== index)
// const duplicateElementa = tofindDuplicates(aay);
console.log(toFindDuplicates);

function data(){
    let dat = 'ui'
    function datas(){
        var dates = 78
    }
    datas()
    console.log(dat);
}
data();
let min = arry[0]
for (let i = 1; i < arry.length; i++) {
    if (arry[i] > min) {
        min = arry[i]
    }
}
console.log(arry);
console.log(Math.max(...arry));
console.log(Math.min(...arry));
console.log(min);
