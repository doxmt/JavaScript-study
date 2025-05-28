sayHello()
function sayHello(){
  console.log("Hello")
}

const sayBye = function(){
  console.log("Bye")
}

sayBye()

const result1 = window.confirm("확인해봐요!")
console.log(result1)

function noReturn(){
  console.log("아무것도 반환하지 않는다")
}

const result2 = noReturn()
console.log(result2)

function yesReturn(){
  console.log("무언가를 반환한다")
  return 10;
}

const result3 = yesReturn()
console.log(result3)

function yesReturn1(){
  console.log("무언가를 반환한다")
  return 10,20,30,40,50;
}

const result4 = yesReturn1()
console.log(result4)

function yesReturn2(){
  console.log("무언가를 반환한다")
  let num = 5;
  return num;
}

const result5 = yesReturn2()
console.log(result5)

function sayAnything(){
  console.log("아무 말이나 하자!")
}
sayAnything()
sayAnything("도서관에서 공부중입니다")
function sayAnything1(ant){
  console.log(ant)
}
sayAnything1("도서관에서 공부중입니다")
sayAnything1("너무 더워용")

function sayAnything2(ant,number){
  for(let i = 0; i < number; i++)
  console.log(ant)
}
sayAnything2("도서관에서 공부중입니다",4)
sayAnything2("너무 더워용",3)

function oddEven(number){
  if(number % 2 == 0){
    console.log("짝수")
  }else{
    console.log("홀수")
  }

}

oddEven(123132)
oddEven(137)