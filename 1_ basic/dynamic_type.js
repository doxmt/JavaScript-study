// 자바스크립트는 동적 타입을 가진 언어
// 특정 값이 할당된 변수에, 그와 다른 자료형의 값을 넣는 것이 가능
// 자유롭지만 그만큼 자료형 관련 오류들에 취약함

let job = '학생';
let age = 17;

console.log(job, age);
console.log(typeof age);

// 숫자 값이 들어있던 age에 문자열 값을 넣음
age = '열일곱';

console.log(age);
console.log(typeof age);

// 자료형의 다름으로 일어날 수 있는 오류
// 특정 자료형에 대해서만 사용될 수 있는 기능 런타임 오류

// 주어진 문자열을 대문자로 바꾸는 함수
// 다른 자료형에 대한 예외처리 없음
function getUpperCase(str) {
  return str.toUpperCase();
}

console.log(getUpperCase('hello'));

// ⚠️ 오류 발생!
console.log(getUpperCase(1));