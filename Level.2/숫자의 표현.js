function solution(n) {
  let count = 0
  for(let i = 1; i <= n/2+1; i++){
      let sum = i
    for(let j = i+1; j <=n/2+1; j++){
       sum += j 
       if(sum === n){
          count += 1;
          break;
       }
       if(sum > n){
         break
       }
    }
 }
return count + 1
}