//연산자 마무리

// 1. 쉼표 연산자
// 왼쪽부터 차례로 실행, 마지막 것 반환
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
);

// 2. ?? - null 병합 연산자
// ||와 달리, falsy가 아닌 null 또는 undefined만 대체
/*
let x;
x ?? console.warn(x, 'x에 값이 없습니다.');

x = 0;
x ?? console.warn(x, 'x에 값이 없습니다.');

x = null;
x ?? console.warn(x, 'x에 값이 없습니다.');
*/

let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';

console.log(nameTag1, nameTag2);

//병합 할당 연산자들

let x1 = 0;
let y1 = '';
let z1 = null;

x1 ||= 100;
y1 &&= '있어야 바뀜';
z1 ??= '기본값';

console.log(x, y, z);

//II. 연산자의 우선순위
/*
1	!, +, -, ++, --, typeof
2	**
3	*, /, %
4	+, -
5	<, <=, >, >=
6	==, !=, ===, !==
7	&&
8	||
9	=, +=, -=, *=, /=, %=, **=, &&=, ||=, ??=
10	,
*/