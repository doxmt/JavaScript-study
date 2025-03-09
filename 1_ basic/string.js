// 문자열(string)-텍스트 데이터
// I. 기본 표기방법
// 작은따옴표 - ' ~ '
let word = '안녕하세요! 🙂';
console.log(word);

// 큰따옴표 - " ~ "
word = "반갑습니다~ 👋";
console.log(word);

//문자열 안에 따옴표 사용
let word1 = '작은따옴표 안에 "큰따옴표" 사용';
let word2 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word1, word2);

// ⚠️ 오류 발생
/* let word1 = '작은따옴표 안에 '작은따옴표' 사용';
let word2 = "큰따옴표 안에 "큰따옴표" 사용";
console.log(word1, word2);*/

// ⭐️ 이스케이프 표현(escape sequence)
let word3 = '작은따옴표 안에 \'작은따옴표\' 사용';
let word4 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word3, word4);

/*
이스케이프 표현
\'	작은따옴표
\"	큰따옴표
\n	줄바꿈
\t	탭
\\	백슬래시
*/
let word5 = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
console.log(word5);

// II. 백틱 - ` ~ `
// ⭐️ 문자열 안에 탭과 줄바꿈 그대로 사용 가능!
let word6 = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(word6);

// 템플릿 리터럴
// ${}안에 상수나 변수, 표현식 등을 삽입 가능 [다른 자료형도 사용할 수 있음]
const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);