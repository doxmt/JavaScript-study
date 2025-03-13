// II. 함수를 정의하는 방법들
// 1. 함수 선언
function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

//2. 상수나 변수에 함수 대입 함수도 값
const subt = function (x, y) {
  return x - y;
}

console.log(subt(7, 2));

function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 💡 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
}

console.log(add(2, 7));

// 3. 화살표 함수
// 한 줄 안에 값만 반환시
const mult1 = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult2 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y;
};

console.log(mult(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));

//⚠️ 2번과 3번 방법으로 선언한 함수는 호이스팅되지 않음
/*
console.log(div(8, 4));

const div = function (x, y) {
  return x / y;
}

console.log(div(8, 4));

const div = (x, y) => x / y;
*/

// 💡 함수 생성 시점이 다르기 때문
// 1번 방법으로 정의된 함수는 엔진의 코드 실행 이전 미리 생성됨