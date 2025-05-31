setTimeout(function(){
  console.log(1234)
},3000)

let interId;
interId = setInterval(function(){
  console.log("안녕하세요!")
},1000)

console.log(interId)

const button = document.querySelector('button')
button.addEventListener('click', function(){
  clearInterval(interId)
})