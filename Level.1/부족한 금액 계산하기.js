function solution(price, money, count) {
  let sum = 0;
  
  for(let  i = 1; i<= count; i++){
    sum += price*i
  }
  return sum - money < 0 ? 0 : sum - money
}
solution(3,20,4)