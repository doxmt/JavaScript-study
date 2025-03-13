// 💡 객체와 배열의 for문
// 객체: for (키 이름 in 객체명) - 객체의 키들을 순서대로 반환 ⭐️in⭐️
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key])
}
console.log()

// 배열: for (항목 of 배열명) - 배열의 항목들을 순서대로 반환 ⭐️of⭐️
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}

for (const el of list) {
  console.log(el);
}

// 💡 for ... of문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}

// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
}

// 원본을 바꾸지 않음
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);
console.log()

//원본이 바뀜
for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1, numbers2);

// II. continue와 break
// 1. continue - 한 루프를 건너뜀
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log('for 루프 종료');

//2. break - 블록을 종료하고 빠져나옴
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log('for 루프 종료');
// 3. label - 중첩된 반복문을 명명하여 continue 또는 break에 사용
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}