function solution(n) {
   const result = []
   let newStr = String(n)
   for(let i = 0; i < newStr.length; i++){
       result.unshift(Number(newStr[i]))
   }
   return result
}
solution(12345)

// 마지막 map 을 써줘서 풀어도 될듯,