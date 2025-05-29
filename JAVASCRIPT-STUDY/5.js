const textInput = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener('click', function(){
  console.log(textInput.value)
  textInput.value = "전달완료"
})

const form = document.querySelector("form")

form.addEventListener('submit',function(e){
  e.preventDefault()
  console.log(form.name.value)
  console.log(form.town.value)
  window.alert("제출 완료 !")
})