// 전역 객체와 표준 빌트인 객체
// I. 전역 객체 global object
// 언제 어디서든 들어마실 수 있는 공기와도 같은...
// 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체

console.log(globalThis);

// 💡 전역 객체에 포함되는 것
// 표준 빌트인 객체
// 호스트 객체 - 환경에서 제공하는 기타 객체들 : 브라우저의 Web API, Node.js API 등
// (브라우저 한정) - 전역으로 설정된 var 변수와 전역 함수

// II. 표준 빌트인 객체 standard built-in objects
// ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
// 전역 프로퍼티로 제공됨 - globalThis등을 붙이지 않고 바로 사용 가능
// 그러나 요소들로 갖고 있는 것은 확인 가능
console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);

// III. 래퍼 객체 wrapper object
const str = 'abcde';
console.log(
  str.length,
  str.toUpperCase(),
  str[0]
);
const num = 123.4567;
console.log(
  typeof num.toString(),
  num.toFixed(2)
);

// Number, String, Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
// 원시값을 필요시 래퍼 객체로 감싸서 wrap 그것의 인스턴스로 만들어 기능 실행
// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발

// ⭐️ 해당 기능 사용 후에는 원시 객체로 돌아감 - 메모리 절약
const str1 = 'abcde';
console.log(str1.length);
console.log(typeof str1, str1);

// valueOf 함수 - 래퍼 객체의 인스턴스에서 원시값 반환
const str2 = new String('abcde');
const num2 = new Number(123.4567);
const bool = new Boolean(true);

console.log(str2.valueOf());
console.log(num2.valueOf());
console.log(bool.valueOf());