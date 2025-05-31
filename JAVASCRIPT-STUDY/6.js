const select = document.querySelector('select')
const button = document.querySelector('button')

button.addEventListener('click', function(){
  let result;
  result = select.value == "foot" ? 
  "축구를 선택 하셨군요" :
  "축구를 선택하지 않으셨군요"
  alert(result)

})