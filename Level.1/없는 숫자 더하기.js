function solution(numbers) {
  // num 1부터 9까지중에서 
  // 들어오는 값들에서 없는것을 골라서 다 더한다
  let result = 0;
  for(let i = 1; i < 10; i++){
    if(!numbers.includes(i)){
      result += i
    }
  }
  return result
}
solution([1,2,3,4,6,7,8,0])