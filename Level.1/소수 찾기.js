function solution(n){
  let count = 0;
  for(let i = 2; i <= n; i++){
    if(isPrime(i)){
      count++
    }
  }
  function isPrime(num){
  for(let i = 2; i <= Math.sqrt(num); i++){
    console.log(Math.sqrt(num))
    if(num % i === 0){
        return false
      }
    }
    return true
  }
  console.log(count)
}
solution(29) 
// 2,3,5,7,11,13,17,19,23,29


// 다른사람 !
function solution(n) {
    const arr = [];
    for(let i = 2; i <= n; i ++){
      arr[i] = i;
    }
    for(let i = 2; i <= n; i ++){
      for(let j = i * 2; j <= n; j += i){
         arr[j] = 0
      }
    }
  console.log(arr.filter((it)=>it!==0).length)
}