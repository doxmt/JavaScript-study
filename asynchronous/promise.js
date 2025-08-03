//promise
/*
const promise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    console.log("안녕");
    // reject("실패한 이유...")
    // resolve("안녕");
  }, 2000);
});

setTimeout(() => {
  console.log(promise)
}, 3000);
*/

//then
/*
const promise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    const num = 10;

    if(typeof num === 'number'){
      resolve(num+10)
    }else{
      reject("num이 숫자가 아닙니다")
    }

  }, 2000);
});

promise.then((value)=>{
  console.log(value);
})
*/

//catch
/*
const promise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    const num = null;

    if(typeof num === 'number'){
      resolve(num+10)
    }else{
      reject("num이 숫자가 아닙니다")
    }

  }, 2000);
});

promise.catch((error)=>{
  console.log(error);
})
*/

//chaining
/*
const promise = new Promise((resolve, reject)=>{
  setTimeout(() => {
    const num = null;

    if(typeof num === 'number'){
      resolve(num+10)
    }else{
      reject("num이 숫자가 아닙니다")
    }

  }, 2000);
});

promise.then((value)=>{
  console.log(value);
})
.catch((error)=>{
  console.log(error);
})
*/

// promise를이용해 코드를 간결하게 작성하기
function add10(num){
  const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {

      if(typeof num === 'number'){
        resolve(num+10)
      }else{
        reject("num이 숫자가 아닙니다")
      }
  
    }, 2000);
  });
  
  return promise;
}

add10(0).then((result)=>{
  console.log(result);
  return add10(result);
})
.then((result)=>{
  console.log(result);

  return add10(result);
})
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.log(error);
})
