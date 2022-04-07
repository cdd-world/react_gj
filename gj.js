// WJM LECTURE

// function add(first, second) {
//     return first + second;
// }

// var add = function(first, second) {
//     return first + second;
// }

// var add = (first, second) => first + second;

// var x = 0;
// var y = 0;
// var obj = {x : x, y : y};

// var randomKeyString = 'other';
// var combined = {};
// combined['one' + randomKeyString] = 'some value';

// var obj2 = {
//     methodA: function() {console.log('A');},
//     methodB: function() {return 0;},
// };

// var x = 0;
// var y = 0;
// var obj = {x, y};

// var randomKeyString = 'other';
// var combined = {
//     ['one' + randomKeyString]: 'some value',
// };

// var obj2 = {
//     x,
//     methodA() {console.log('A');},
//     methodB() {return 0;},
// };

// var list = [0, 1];
// var item1 = list[0];
// var item2 = list[1];
// var item3 = list[2] || -1;
// var temp = item2;
// item2 = item1;
// item1 = temp;
// var obj = {
//     key1: 'one',
//     key2: 'two',
// };
// var key1 = obj.key1;
// var key2 = obj.key2;
// var key3 = obj.key3 || 'default key3 value';
// var newKey1 = obj.key1;

// var list = [0, 1]
// var [
//     item1,
//     item2,
//     item3 = -1,
// ] = list;
// [item2, item1] = [item1, item2];
// var obj = {
//     key1: 'one',
//     key2: 'two',
// };
// var {
//     key1: newKey1, // newKey1 -> 전역변수
//     key2,
//     key3 = 'default key3 value',
// } = obj;

const qs = 'banna=10&apple=20&orange=30';

// function parse(qs) {
//     var queryString = qs.substr(1); // querystring = 'banna=10&apple=20&orange=30'
//     var chunks = qs.split('&');
//     var result = {};
//     for(var i = 0; i < chunks.length; i++){
//         var parts = chunks[i].split('=');
//         var key = parts[0];
//         // var value = parts[1];
//         var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
//         result[key] = value;
//     }
//     return result;
// }

// function parse(qs) {
//     const queryString = qs.substr(1);
//     const chunks = qs.split('&');
//     let result = {};

//     chunks.forEach((chunk) => {
//         const parts = chunk.split('=');
//         const key = parts[0];
//         const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
//         result[key] = value;
//     });
//     return result;
// }

// console.log(parse(qs));

// function parse(qs) {
//     const queryString = qs.substr(1);
//     const chunks = qs.split('&');
//     let result = {};

//     chunks.forEach((chunk) => {
//         const[key, value] = chunk.split('=');
//         result[key] = value;
//     });
//     return result;
// }

// console.log(parse(qs));

// JSH Lecture

var a = 100;
let b = 200;

// nickname = "cdd";
// let nickname; // 사용불가 , var 사용시 선언을 어디서 하든 맨 위에 있다고 가정

// setTimeout(() => {
//     console.log('JavaScript So Fun !!');
// }, 1000)

// function work1(onDone) {
//     setTimeout(() => onDone('작업1 완료!'), 100);
// }

// function work2(onDone) {
//     setTimeout(() => onDone('작업2 완료!'), 200);
// }

// function work3(onDone) {
//     setTimeout(() => onDone('작업3 완료!'), 300);
// }

// function urgentWork() {
//     console.log('긴급작업');
// }

// work1(function(msg1) {
//     console.log('done after 100ms:'+msg1);
//     work2(function(msg2) {
//         console.log('done after 300ms:'+msg2);
//         work3(function(msg3) {
//             console.log('done after 600ms:'+msg3);
//         });
//     });
// });

// urgentWork();

const promise = new Promise((resolve, reject) => {
    // promise가 만들어질때 실행됨.
    console.log("hello, promise");
})

const work1 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업1 완료!'),100);
    });
const work2 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업2 완료!'),200);
    });
const work3 = () =>
    new Promise(resolve => {
        setTimeout(() => resolve('작업3 완료!'),300);
    });
function urgentWork() {
        console.log('긴급작업');
}


const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms:'+msg1);
    return work2();
}

work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 300ms:'+msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms:'+msg3);
    });
urgentWork();