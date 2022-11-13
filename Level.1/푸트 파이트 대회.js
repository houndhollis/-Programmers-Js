function solution(food) {
  // 양쪽에서 먹기시작해서 가운데 물을 가장 빨리 먹는 사람이 이긴다.
  let result = ''
  for(let i = 1; i < 4; i++){
    let count = 0;
    if(food[i] > 1){
      count = Math.floor(food[i]/2)
      while(count > 0){
        result += i
        count --
      }
    }
  }
  return result + '0' + result.split('').reverse().join('')
}
solution([1, 3, 2, 3])
