const inputType = document.querySelector("#typing")
const inputClick = document.querySelector("#push")

const handleTyping= function(){
  console.log("타이핑 되고 있어요!")
}

const handleClick= function(){
  console.log("클릭 되고 있어요!")
}

inputType.onkeydown = handleTyping
inputClick.onclick = handleClick

const btn1 = document.getElementById("one")
const btn2 = document.getElementById("two")
const btn3 = document.getElementById("three")

const handleClick1 = function(){
  console.log("저를 클릭하셨나요?")
}

btn2.addEventListener('click', handleClick1)
btn2.addEventListener('click', function(){
  console.log("또 다른 핸들러가 추가 등록 되었다")  
})

btn2.removeEventListener('click', handleClick1)

const handleClick2 = function(event){
  console.log(event.target)
}

btn1.addEventListener('click',handleClick2)
btn2.addEventListener('click',handleClick2)
btn3.addEventListener('click',handleClick2)