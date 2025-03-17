// String 객체
// I. 생성자 함수
const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());
// valueOf 또는 toString 메서드로 문자열 원시값 반환
const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1});

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);

console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());

// 다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환

// II. 유사 배열 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

myStr[myStr.length - 1] = '?';
console.log(myStr); // 💡 배열과 달리 바뀌지 않는다

for (const letter of myStr) {
  console.log(letter);
}

// III. 주요 인스턴스 메서드⭐️⭐️⭐️

// 1. toUpperCase, toLowerCase
// 라틴어 문자를 모두 대문자/소문자로 변경하여 반환
const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);
console.log(word); // ⭐️ 기존의 문자열은 바꾸지 않음! 다음의 메서드들 모두 마찬가지

// 흔한 활용예
function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'),
  areSameWords('ABC', 'DEF')
);

// 2. charAt, at
// 인자로 주어진 인덱스의 문자 반환

// ✨charAt
console.log(
  'Hello World!'.charAt(0),
  '안녕하세요~'.charAt(2)
);

// ✨ at
// 신기능, 배열에서도 사용
// 음수로 뒤에서부터 접근 가능 ( -1 부터 )
console.log(
  '안녕하세요~'.at(1),
  '안녕하세요~'.at(-1)
);

// 3. indexOf, lastIndexOf
// 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
// 포함되지 않을 시 -1 반환
const word1 = '반갑습니다!';
console.log (
  word1.indexOf('습'),
  word1.lastIndexOf('습')
);

const word2 = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word2.indexOf('하나'),
  word2.lastIndexOf('하나')
);

// 4. includes, startsWith, endsWith
// 인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}

// . search
// 인자로 받은 🔗 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);

// 6. substring
// 인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환
const word3 = 'ABCDEFGHIJKL';
const part = word3.substring(4, 8)

console.log(word3, part);
// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로

// 7. slice
// substring과 같으나 음수로 뒤에서부터 자를 수 있음
const word4= 'ABCDEFGHIJKL';
console.log(
  word4.substring(4, 8),
  word4.slice(4, 8),
);

console.log(
  word4.substring(-4),
  word4.slice(-4)
);

// 8. split
// 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)

// 9. trim, trimStart, trimEnd
// 앞뒤의 공백 제거하여 반환
const word5 = '  Hello World!  ';
console.log(`--${word5}--`);
console.log(`--${word5.trim()}--`);
console.log(`--${word5.trimStart()}--`);
console.log(`--${word5.trimEnd()}--`);
// 중간의 공백은 제거하지 않음

// 10. repeat
// 인자로 주어진 정수만큼 문자열을 반복하여 반환
const word6 = '호이';

console.log(word6.repeat(3));
console.log(word6.repeat(0));
console.log(word6.repeat());
// 인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생

// 11. replace, replaceAll
// 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
);
// replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
// 모두 치환하려면 정규식 /.../g 사용
console.log(word.replaceAll('밥', '라면'));
console.log(word.replaceAll(/밥/g, '라면'));
// replaceAll은 문자열도 자동으로 /.../g처럼 인식

// ⭐️ 메서드 체이닝 method chaining
// 값을 반환하는 인스턴스 메서드를 연속으로 사용

const word7 = ' 모두 HELLO! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word7
  .trimStart()                // '모두 HELLO! '
  .toLowerCase()              // '모두 hello! '
  .replaceAll(rpFrom, rpTo)   // '모두 bye! '
  .toUpperCase()              // '모두 BYE! '
  .repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);

console.log(word7); // 원본은 그대로
