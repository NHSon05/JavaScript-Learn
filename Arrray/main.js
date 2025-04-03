
var languages = [
    'JavaScript',
    'Ruby',
    'PHP',
    null,
    undefined,
    function(){
    }
];
// console.log(languages);
// console.log(languages[2]);

// add new elements to arrays
// sử dụng push
// languages.push('Son dep trai');
// console.log(languages); //JavaScript, Ruby, PHP, null, undefined, Son dep trai

// languages.splice(0,4);
// console.log(languages); //Son Dep Trai

// xoá phần tử cuối cùng trong mảng:        pop()
// languages.pop();
// console.log(languages);

// for (let i=0; i<languages.length; i++){
//     console.log(i, languages[i]);
// }

// for (let language of languages) {
//     console.log(language);
// }

// console.log(languages.join('-'));
// console.log(languages.unshift('dark')); //in ra JavaScript
// console.log(languages); //mất phần tử JavaScript

// var language2 = [
//     'dart',
//     'flutter'
// ];
// console.log(languages.concat(language2));

console.log(languages.slice(1,3));

function joinWithCharacter(array, charactor) {
    var res = '';
    for (var i=0; i<array.length;i++) {
        if (i != array.length-1){
            res += array[i] + charactor;
        } else {
            res += array[i];
        }
    }
    return res;
}
var cars = ['Honda', 'Mazda', 'Mercedes'];
console.log(cars.length);

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"

function getFirstElement(array){
    var b = array.shift();
    array.push(b);
    return b;
}

var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']