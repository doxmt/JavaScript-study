// 숫자와 관련 연산자

// I. 숫자 자료형으로 표현되는 것

// 1. 양과 음의 정수와 실수
// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

//전부 number로 나옴
console.log(
  typeof integer,
  typeof real,
  typeof negative
);
console.log()

// 2. 무한대
let x = 1 / 0;
console.log(x, typeof x);
// 무한대에는 양음이 있음
console.log(-x, typeof -x);

let y = -1 / 0;
console.log(y, typeof y);

let z = Infinity;
console.log(z, typeof z);
console.log()

// 3. 숫자가 아닌 것 Not a Number
let a = 1 / 'abc';
let b = 2 * '가나다';
let c = NaN;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// NaN은 양음이 없음
console.log(-NaN);
console.log()

//⭐️ 주어진 값이 NaN인지 여부 확인하는 방법
let xx = 1 / 'abc';

console.log(
  xx,
  xx == NaN, // 판별 불가
  xx === NaN, // 판별 불가
  isNaN(xx), // 숫자가 아닐 시 true
  Number.isNaN(xx) // 보다 엄격한 버전
);
console.log()

// II. 연산자
/*
1. 산술 연산자

a. 이항 산술 연산자
+, -, *, /, %, **
셈의 결과를 반환
부수효과 없음
*/

// 값 반환
let x1 = 10;
let y1 = x1 * 10;

console.log(y1);

console.log(
  y1 + 1, // 덧샘
  y1 - 1, // 뺄셈
  y1 * 2, // 곱셈
  y1 / 5, // 나눗셈
  y1 % 3,  // 나머지
  y1 ** 2 // 제곱
);

// 부수효과 없음
console.log(y1);
console.log()

// b. 단항 산술 연산자
/*
연산자	 반환	      부수효과
a++	 값 그대로	    1 증가
++a	 1 증가한 값	  1 증가
a--	 값 그대로	    1 감소
--a	 1 감소한 값	  1 감소
+a	 값 그대로	    없음
-a 	양음을 반전한 값 	없음
*/
let x2 = 10;

// 값을 반환부터 하고 증가
console.log('1.', x2++, x2);
// 값을 증가부터 하고 반환
console.log('2.', ++x2, x2);

let x3 = 3;
let y3 = 4;

// 💡 부수효과가 일어나는 시점
console.log(x3-- * --y3, x3, y3);
console.log()

// 💡 문자열을 숫자로 바꿈
console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열
);
/*
2. 할당 산술 연산자 부수효과
연산자	    의미
x += y  :	x = x + y
x -= y  :	x = x - y
x *= y  :	x = x * y
x /= y  :	x = x / y
x %= y  :	x = x % y
x **= y :	x = x ** y
*/