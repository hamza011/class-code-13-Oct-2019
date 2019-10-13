var array = ["hello", "hello-1", "hello-2"];
var obj = {
    data: 'string',
    property: 'value'
}
// for (var a in obj) { 
//     console.log("a: ", obj[a]);
// }
// for (var a in array) { 
//     console.log("a: ", array[a]);
// }
// for (var i of obj) {
//     console.log(i);
// }

// REST Parameters
function sum(a, b, ...numbers) {
    // console.log(numbers);
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return a + b + result;
}
// console.log(sum(5, 10, 20, 50));

function sum2(a, b) {
    return a + b;
}
// console.log(sum2(10));

function sum3(a, b = 10) {
    return a + b;
}
// console.log(sum3(10));

var student = {
    name: "Taha",
    class: "BS",
    country: "Pakistan",
    city: "Karachi"
}
var student2 = {
    ...student,
    id: 2,
    name: "Ali",
};
// console.log(student2);
// var name = student.name;
// var _class = student.class;
var { name, city } = student;
// console.log(city);

// function sumBy2(a) {
//     return a + 2;
// }
// function sumBy5(a) {
//     return a + 5;
// }
function generator(num) {
    return function (a) {
        return a + num;
    }
}
var sumBy2 = generator(2);
// console.log(sumBy2(10));
var sumBy5 = generator(5);
// console.log(sumBy5(10));

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// function greetings(name) {
//     return function () {
//         console.log("hello " + name);
//     }
// }
// var greetTaha = greetings("Taha");

// var name = "Name";
// function fn(cb) {
//     cb();
// }
// fn(function () {
//     console.log(name);
// });

function* gn() {
    yield 10;
    yield 20;
    return 30;
}
var data = gn();
// console.log(data.next());

var object = {};
try {
    console.log(object.name.count);
}
catch(err) {
    console.log('err: ', err);
}