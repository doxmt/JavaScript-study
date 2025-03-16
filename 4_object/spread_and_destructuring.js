// 스프레드와 디스트럭쳐링

// I. 스프레드 spread

// 1. 기본 문법
const class1 = {
  x: 1, y: 'A', z: true
};

const class2 = { ...class1 };
// 아래의 참조복사 코드와 다름!
// const class2 = class1; -> class2가 class1 과 같은 객체를 바라보게함 / 스프레드는 따로 복사해서 생성
console.log(class2);

// 2. 특정 객체의 프로퍼티를 포함하는 다른 객체 생성에 유용
const classA = {
  a: 1, b: 'A', c: true
};
const classB = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const classC = {
  ...class1, z: 0
}
const classD = {
  ...classB, ...classC, ...classB.d
}
console.log(classC);
console.log(classD);

// 3. 중복되는 프로퍼티는 뒤의 것이 덮어씀
const classz = {
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 }
}

console.log(classz);

// 4. ⭐️ 복사의 깊이
const classX = {
  x: 1,
  y: { a: 2 },
  z: [3, 4]
};

const classY = { ...classX };
classX.x++;
classX.y.a++;
classX.z[0]++;

console.log(classX);
console.log(classY);

// 해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
// 원시값만 있는 객체만 값에 의한 복사 - 얕은 복사
// 복합적인 객체의 완전한 깊은 복사는 이후 배우게 될 것

// II. 디스트럭쳐링 destructuring
// 1. 문법
// 기존 코드
const obj1 = {
  x: 1, y: 2, z: 3
};

const x = obj1.x;
const y = obj1.y;
const z = obj1.z;

console.log(x, y, z);
// 디스트럭쳐링으로 간략화
const obj2 = {
  xx: 1, yy: 2, zz: 3
};

const {xx, yy, zz} = obj2;

console.log(xx, yy, zz);

// 일부만 가져오는 것도 가능
const obj3 = {
  xxx: 1, yyy: 2, zzz: 3
};

const {xxx, zzz} = obj1;

console.log(xxx, zzz);

// 2. 활용
// 필요한 프로퍼티 값을 짧은 코드로 변수/상수에 담을 때
const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1;

console.log(length);

// ⭐️ 함수 인자값의 가독성을 위해 객체를 사용할 때
/*
// 인자가 많은 함수 - ⚠️ 좋지 않음!
function introduce(name, age, job, married) {
  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

// 여러 인자, 순서 중요 - 가독성 떨어짐
introduce('김철수', 28, '개발자', false);
*/

/*
// 인자를 하나의 객체로 묶어 받음 
function introduce(person) {
  console.log(`제 이름은 ${person.name}, `
    + `나이는 ${person.age}세구요. `
    + `직업은 ${person.job}, `
    + `${person.married ? '기혼' : '미혼'}입니다.`
  )
}

// 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O' // 추가 인자 무관
};

introduce(person1);
*/

// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
  // 순서 무관
  // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce(person1);