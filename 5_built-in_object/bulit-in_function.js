// I. 빌트인 전역 프로퍼티
// 스스로 다른 프로퍼티나 메서드를 갖지 않고 값만 반환
console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);

console.log(globalThis.globalThis);

console.log(
  globalThis == globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis.globalThis
);


// Infinity, NaN, undefined 등의 원시값들은 이 프로퍼티들을 가리킴
// 💡 null은 포함되지 않음 - 가리키는 값이 없음을 의미하므로...
// globalThis 스스로에 대한 참조를 프로퍼티로 포함

// II. 빌트인 전역 함수

// 1. eval - 문자열로 된 코드를 받아 실행
const x = eval('1 + 2 + 3');

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval('({a: 1, b: 2})');

console.log(x, obj);
// ⚠️ 매우 특별한 경우가 아닌 이상 절대 사용하지 말 것

// 2. isFinite - 유한수 여부 반환
console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'),
  isFinite(null)
);

// 3. isNaN - NaN 여부 반환
console.log(
  isNaN(NaN),
  isNaN('abcde'),
  isNaN({}),
  isNaN(undefined)
);

// 4. parseFloat - 인자로 받은 값을 실수로 변환
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 ')
);
// 문자열의 경우 앞뒤공백은 무시
console.log(
  parseFloat('123.0'),
  parseFloat('123'),
  parseFloat(' 123ABC '),
  parseFloat([123, 456, 789])
);
// 숫자로 시작할 경우 읽을 수 있는 부분까지 숫자로 변환
// 배열의 경우 첫 요소가 숫자면 해당 숫자 반환
console.log(
  parseFloat('ABC123'),
  parseFloat({x: 1}),
  parseFloat([]),
  parseFloat(['a', 1, true])
);
// 기타 숫자로 변환이 안 되는 경우 NaN 반환

// 5. parseInt - 인자로 받은 값을 정수(타입은 실수)로 변환
console.log(
  parseInt(123),
  parseInt('123'),
  parseInt(' 123.4567 '),
  parseInt('345.6789')
);
// 소수점 뒤로 오는 숫자는 버림 반올림하지 않음
console.log(
  parseInt('abc'),
  parseInt('{}'),
  parseInt('[]')
);

//  두 번째 인자로 숫자(2~36) 넣으면
console.log(
  parseInt('11'),
  parseInt('11', 2),
  parseInt('11', 8),
  parseInt('11', 16),
  parseInt('11', 32),

  parseInt('11', 37),
  parseInt('11', 'A'),
);

// 주어진 값을 해당 진법의 숫자로 해석하여 10진법 숫자로 반환
// 무효한 숫자는 NaN 반환

// 6. encodeURI, encodeURIComponent
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);

console.log(encodedURI);
// URI(인터넷 자원의 주소)는 🔗 아스키 문자 셋으로만 구성되어야 함
// 아스키가 아닌 문자(한글 등)와 일부 특수문자를 포함한 URI를 유효하게 인코딩


const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);

console.log(encodedKeyword);

const searchURI1 = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchURI1);
// URI에 들어갈 요소를 인코딩

// 💡 둘의 정확한 차이
const raw = '?q=얄코';
console.log(encodeURI(raw));
console.log(encodeURIComponent(raw));

// URI에서 특정 기능을 갖는 =, ?, & 등을 인코딩하는가의 여부
// encodeURI는 인자를 완성된 URI로, encodeURIComponent는 요소로 인식하기 때문

// 7. decodeURI, decodeURIComponent
// encodeURI(Component)와 반대로 동작
const encodedURI2 = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI = decodeURI(encodedURI);

console.log(decodedURI);

const encodedComp = '%EC%96%84%EC%BD%94';
const decodedComp = decodeURI(encodedComp);

console.log(decodedComp);