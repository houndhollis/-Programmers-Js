function solution(s) {
  const obj = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
 // 정규식 표현을 사용하여 단순하게 길게 쓰는것이 아닌 반복을 줄여
 // 코드를 간편화 하였다.
  for(let i = 0; i<obj.length; i++){
     let regexObj = new RegExp(obj[i],'gi')
     s=s.replace(regexObj,i)
   }
 return Number(s)
 }