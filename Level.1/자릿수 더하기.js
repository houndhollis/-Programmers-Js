function solution(n){
 let newStr = String(n).split('')
 let sum = 0
 for(let i = 0; i< newStr.length; i++){
     sum += Number(newStr[i])
 }
 return sum
}
solution(123)