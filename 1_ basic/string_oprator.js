// 문자열에 사용되는 연산자
/* 
I. 비교 연산자 [true or false 값을 반환]
연산자	  의미 - ⭐️ 반환하는 여부	
x == y	값이 같다.	
x === y	자료형도 값도 같다.	(권장)
x != y	값이 다르다.	
x !== y	자료형 또는 값이 다르다.	(권장)
x < y	  사전순상 x가 먼저 온다.	
x <= y	사전순상 x가 먼저 오거나 같다.	
x > y	  사전순상 y 먼저 온다.	
x >= y	사전순상 y 먼저 오거나 같다.	
*/

//표기방식 구분하지 않음
console.log(
  '안녕하세요~' === "안녕하세요~", //true
  '안녕하세요~' === `안녕하세요~`, //true
  "안녕하세요~" === `안녕하세요~`, //true
);

// 대소문자 구분
'Hello!' === 'hello!' //false

// ==, != - 자료형 구분하지 않음 ⭐️ 암묵적 타입 변환
console.log(
  '1' == '1', //true
  '1' == 1, //true⭐️
  '1' == 2 //false
);

// ===, !== - 자료형 구분
console.log(
  '1' === '1', //true
  '1' === 1, //false⭐️
  '1' === 2 //flase
);

// <, <=, >, >= - 사전순 비교
console.log(
  'ABC' < 'abc', //true
  'apple' <= 'banana', //true
  '가나다' > '라마바', //false
  '안녕' >= '안녕' //true
);

// ⚠️ 숫자 문자열 관련 주의!
console.log(
  100 > 12, // ⭐️숫자는 그 자체로 비교 true
  '100' > '12', // 문자는 사전순으로 비교 false
  '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환 true
);
console.log()
/*
II. 연결
연산자	        의미	              부수효과
x + y	  x와 y를 이어붙인 값을 반환	
x += y	x에 y를 이어붙이고 그 결과를 반환	✅
*/

// 1. + 연산자 이항연산자
let str1 = 'Hello';

// 값 반환
let str2 = ' ' + 'World';

console.log(str1);
console.log(str2);

let str3 = str1 + str2;
console.log(str3);

// 부수효과 없음
console.log(str1);
console.log(str2);
console.log()

// 2. += 연산자 할당연산자
let str5 = '헬로';
str5 += ' 월드';

// 부수효과
console.log(str5);

// 값 반환
let str6 = str5 += '~~~';

console.log(str6);

// 부수효과
console.log(str5);