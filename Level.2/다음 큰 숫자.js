// 다른분 코드
// 비교해보자
function solution(n) {
  let answer = n;
  const nCountOne = n.toString(2).match(/1/g).length
  while(true){
      answer++
      if(nCountOne === (answer).toString(2).match(/1/g).length) break
  }
  return answer;
}

// 처음 푼것 
// function solution(n) {

//   const nCount = n.toString(2).replace(/[0]/g,'').length
//   let = iCount = 0
//   let i = n + 1
  
//   while(true){
//    iCount = i.toString(2).replace(/[0]/g,'').length;
//    if(nCount === iCount){
//      console.log(i)
//      return i 
//    }
//     i+=1
//   }
// }

// 시간초과 걸렸다!