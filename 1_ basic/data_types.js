//1. 불리언 boolean
// 참 또는 거짓 (true or false) - 상반된 둘 중 하나의 값을 담을 수 있음
let isEmployed = true;
let isMarried = false;

console.log('직업 있음:', isEmployed);
console.log('기혼:', isMarried);

const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a);
console.log(b, typeof b);
console.log()

// 2. 숫자 number
// 자바스크립트에는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
// 정수는 2^53 - 1까지 안정적으로 표현 가능 - 더 큰 정수는 BigInt로
let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);
console.log()

//3. 문자열 string
// "글자(들)"  
// 큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸인 텍스트 데이터
let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);
console.log()

// typeof의 반환값은 문자열
console.log(
  typeof (typeof true),
  typeof (typeof 123.45),
  typeof (typeof 'Hello'),
);
console.log()
// //4. undefined
// 값이 부여되지 않은 상태라는 의미
// 그러나 undefined도 값임 많은 다른 언어들과 다른 점
// 아무 것도 반환하지 않는 구문 - undefined 반환 ex)let x = 1; 
let x;
console.log(typeof x);
console.log()

//5. null
// 의도적인 빈 값을 의미
// object(객체) 등이 들어있거나 반환되어야 하지만 없을 때 주로 사용
// typeof가 object를 반환
let y;
console.log('값 넣기 전', typeof y);
y = null;
console.log('null값 넣은 후', typeof y);
