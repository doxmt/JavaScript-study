// 함수의 의미와 사용법

/* 💡 기본 문법
function 함수명 (입력값) {
  // 수행할 일
  return 반환값 // 있을 시
}

 함수명(입력값);
*/

// I. 함수를 사용한다는 것
// 1. 반복될 수 있는 작업을 정의해두는 것
// 함수 사용 전
let a = 3, b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

let c = 10, d = 2;

console.log(`${c} + ${d} = ${c + d}`);
console.log(`${c} - ${d} = ${c - d}`);
console.log(`${c} * ${d} = ${c * d}`);
console.log(`${c} / ${d} = ${c / d}`);

let e = 7, f = 5;

console.log(`${e} + ${f} = ${e + f}`);
console.log(`${e} - ${f} = ${e - f}`);
console.log(`${e} * ${f} = ${e * f}`);
console.log(`${e} / ${f} = ${e / f}`);

//함수 사용
function allArithemics (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

allArithemics(a, b);
allArithemics(c, d);
allArithemics(e, f);

// 2. input을 받아 output을 반환 return 하는 것
function add(x, y) {
  return x + y; // ⭐️ 값을 반환
}

let z = add(2, 3);

console.log(z);

console.log(add(4, 5));

console.log(
  add(add(6, 7), add(8, 9))
);

function isOdd (x) {
  return !!(x % 2); //이중부정연산자 0일 때 false, 1일 때 true를 반환
}

let num = 12;

console.log(
  `${num}(는)은 ${
    isOdd(num) ? '홀' : '짝'
  }수입니다.`
);

// a. input으로 받는 값 - 인수와 인자
function add1(x, y) {
  // x, y를 인자 또는 매개변수(parameter)라 부름
  return x + y;
}

// a, b를 인수(argument)라 부름
let z1 = add1(2, 3);

// b. 꼭 인자를 받거나 값을 반환하는 것은 아님
let currentTemp = 24.5;

function logCurrentTemp () {
  console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
}

console.log('반환값:', logCurrentTemp());
// return 문이 정의되어 있지 않으면 undefined 반환
// 💡 console.log 실행 뒤 undefined가 뜨는 이유

// c. ⭐️ return문은 꼭 마지막에
function add2 (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  //return x + y; -> X
  console.log(`결과는 ${x + y}입니다.`);
  return x + y; // -> O
}

console.log(add2(2, 7));

// d. 💡 호이스팅 hoisting
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add4(2, 7));

function add4 (x, y) {
  return x + y;
}