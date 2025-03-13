// 불리언과 관련 연산자

console.log(true, typeof true);
console.log(false, typeof false);

let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log()

// I. 연산자
// 1. 부정 연산자
console.log(
  true, !true, false, !false
);

console.log(
  true, !true, !!true, !!!true
);

console.log(
  false, !false, !!false, !!!false
);
console.log(
  true === !false,
  !(1 == '1'),
  !(1 === '1'),
  !(typeof false === 'boolean')
);
console.log()

// 2. AND / OR 연산자
// a. && - AND : 양쪽 모두 true 여부 반환
console.log(
  true && true,
  true && false,
  false && true,
  false && false,
);
// b. || - OR : 한 쪽이라도 true 여부 반환
console.log(
  true || true,
  true || false,
  false || true,
  false || false,
);

// 💡 드 모르간의 법칙
let a1 = true;
// a = false;
let b1 = true;
// b = false;

console.log(
  !(a1 && b1) === (!a1 || !b1),
  !(a1 || b1) === (!a1 && !b1)
); // 💡 항상 true

/*
&& : 앞의 것이 false면 뒤의 것을 평가할 필요 없음
|| : 앞의 것이 true면 뒤의 것을 평가할 필요 없음
평가는 곧 실행 - 이 점을 이용한 간결한 코드
💡 연산 부하가 적은 코드를 앞에 - 리소스 절약
*/
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

// 3. 삼항연산자 - ~ ? ~ : ~
let x = true;
// x = false;

let y = x ? '참입니다.' : '거짓입니다.';
console.log(y);

let num = 103247;

console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

let error1 = true;
//error = false;

error1 
  ? console.error('오류 발생!') 
  : console.log('이상 없음');

  console.log()

  // II. Truthy vs Falsy : true 또는 false로 평가되는 값들
  
  // 1. Truthy
  console.log(
    1.23 ? true : false, // 0이 아닌 수 모두 true
    -999 ? true: false,
    '0' ? true : false,
    ' ' ? true : false, // 비어있지 않은 문자열 모두 true
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false,
  );

  // ⚠️ true와 `같다`는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);

// 2. Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false, //true
  0 === false, //자료형 비교 false 
  '' == false, //true
  '' === false //자료형 비교 false
);
console.log(
  null == false,
  undefined == false,
  NaN == false,
);