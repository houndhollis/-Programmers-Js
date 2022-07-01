function solution(x) {
let strNum = String(x).split('')
let sum = 0;
  for(let i = 0; i<strNum.length; i++){
      sum += Number(strNum[i])
  }
  return x%sum===0? true:false
}

solution(18)