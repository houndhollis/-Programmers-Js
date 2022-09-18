function solution(num) {
  let count = 0;

  num === 1 ? count : replay(num)
  if(count > 500){
    return -1
  }else{
    return count
  }
  
  function replay(){
    if(num === 1)
    return
    if(num % 2 === 0){
    return  num = num / 2,
      count ++,
      replay(num)
    }else if(num % 2 === 1){
     return num = num * 3 + 1,
      count ++,
      replay(num)
    }
  }
}
solution(16)