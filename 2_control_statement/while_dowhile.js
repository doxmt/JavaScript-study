// while과 do while
// while - 조건이 참인 동안 반복수행
let x = 0;

while (x < 10) {
  console.log(x++);
}

/*
💡 무한루프
let x = 0;

while (x < 10) {
  console.log(x);
}

인위적인 무한반복에 널리 쓰이는 코드
while (true) {
  console.log('무한반복');
}
*/

//⭐ break문으로 무한반복 탈출 가능
let x1 = 0;

while (true) {
  if (x1++ >= 5) break; // 😎
  console.log(x1);
}
// 1 ~ 5 출력

// continue와 break 사용

// 1, 3, 5, 7을 의도한 코드. 그러나...
// ⚠️ 무한루프! 왜일까요?
/*
let x = 0;
while (x < 14) {
  if (x % 2 === 0) continue;
  if (x > 7) break;
  console.log(x++);
}
*/

// 더 짧고도 직관성을 유지한 코드의 예
let xx = 0;
while (xx < 14) {
  const xNow = xx++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}

// do while - 일단 수행하고 조건을 평가
let x2 = 12;

do {
  console.log(x2++);
} while (x2 < 10);