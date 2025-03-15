// 생성자 함수
// 같은 형식의 개체를 여러 개 만들 경우

// I. 생성자 함수로 객체 만들기
// 생성자 함수 
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
// 인스턴스 생성 ⚠️ new를 붙이지 않으면 undefined 반환
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());
/*
생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
생성자 함수로 만들어진 객체를 인스턴스 instance 라 부름
this.~로 생성될 인스턴스의 프로퍼티들 정의
생성자 함수는 new 연산자와 함께 사용
암묵적으로 this 반환
생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능
*/

// II. 생성자 함수로 만들어진 객체
// 1. 프로토타입 prototype - 자바스크립트 객체지향의 중심
function YalcoPizza (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const store1 = new YalcoPizza('판교', 3);
console.log(store1);

// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoPizza.prototype.introEng = function () {
  return `Welcome to Yalco Pizza at ${this.name}!`;
};

console.log(store1.introEng());

console.log(new YalcoPizza('강남', 17).introEng());

// 2. 생성자 함수 자체의 프로퍼티와 함수
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 본사의 정보와 업무
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain = new YalcoChicken('판교', 3);

console.log(YalcoChicken.contact());

// console.log(chain.contact()); //실행 안됌