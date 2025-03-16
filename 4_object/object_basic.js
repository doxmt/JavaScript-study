// 객체의 기본 사용법
// I. 객체 생성과 프로퍼티 접근
const food1 = {
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food1);

console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1['price'] // 💡 대괄호 프로퍼티 접근 연산자
);

// 빈 객체 생성
const food2 = {};
console.log(food2);
// 프로터피 추가
food2.name = '샐러드';
food2.price = '6000';
food2['vegan'] = true;

console.log(food2);
// 프로터피 수정
food2['price'] = '6500';
food2.vegan = false;

console.log(food2);

// 💡 식별자 명명 규칙에 벗어나는 키 이름 사용시
// 변수명 등으로 사용할 수 없는 이름의 키인 경우
const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space'
}

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 표현식으로 키값 정의하기
// 대괄호 [] 사용
let idx = 0;
const  obj1 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx ** idx]: 'POWER'
}

console.log(obj1);

// ⚠️ 객체나 배열을 키값으로 사용시
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj2 = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
}

console.log(
  obj2[objKey],
  obj2[arrKey]
);

// ⚠️ ???????
console.log(
  obj2[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체
  obj2['1,2,3'] // 문자열
);

// 로그를 펼쳐 키값을 볼 것 - 💡 문자열임
// 객체와 배열이 그 자체가 아니라 문자열로 치환되어 키가 되는 것
console.log(obj2);

console.log(
  obj2['[object Object]']
);

// 즉 실제로 해당 객체나 배열의 내용이나 참조값이 키가 되는 것이 아님
// 이후 배울 Map ( 참조값을 키값으로 사용 )과의 차이점

// II. 🗑 프로퍼티 삭제 - delete 연산자
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);

delete person1.age;
console.log(person1);

delete person1['major'];
console.log(person1);

// 💡 오류가 발생하지는 않음
delete person1.hobby;
console.log(person1);

// III. 키의 동적 사용
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}

addModifyProperty (product1, 'inch', 16);
console.log(product1);

addModifyProperty (product1, 'price', 750000);
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1);

// IV. ES6 추가 문법
// 1. 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현
const x = 1, y = 2;

const objx = { 
  x: x,
  y: y
}

console.log(objx);

const objy = { x, y }

console.log(objy);

function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product3 = createProduct('선풍기', 50000, 50);
const product4 = createProduct('청소기', 125000, 32);

console.log(product3, product4);

// 2. 메서드 method - 객체에 축약표현으로 정의된 함수 프로퍼티
// 일반 함수 프로퍼티 정의
const person2 = {
  name: '홍길동',

  salutate: function (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person2.salutate(true));

// ⭐️ 메서드 정의
const person3 = {
  name: '홍길동',
  
  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person3.salutate(true));

// ⭐ ES6부터는 위의 표현으로 정의된 함수만 메서드라고 부름
// 일반 함수 프로퍼티와 특성이 다름 - 이후 자세히 배울 것