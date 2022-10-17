function solution(X, Y) {
  let num = []
  let arryX = X.split('')
  let arryY = Y.split('')
  for(let i = 0; i < X.length; i++){
    for(let j = 0; j < Y.length; j++){
      if(arryX[i] === arryY[j]){
        num.push(Number(X[i]))
        arryY.splice(j,1)
      }
    }
  }
  // 중복된 숫자를 제거하면 안된다.
  num.sort((a,b)=>b-a)
  console.log(num.length === 0? '-1': String(Number(num.join(''))))
}
solution("3403","13203")


// 처음 시도했지만 new Set 부분에서 중복숫자 가 걸린다.
// console.log()
// let num = []
// for(let i = 0; i < X.length; i++){
//   for(let j = 0; j < Y.length; j++){
//     if(X[i] === Y[j]){
//       num.push(Number(X[i]))
//     }
//   }
// }
// // 중복된 숫자를 제거하면 안된다.
// let result = [...new Set(num)]
// result.sort((a,b)=>b-a)
// console.log(result.length === 0? '-1': result)