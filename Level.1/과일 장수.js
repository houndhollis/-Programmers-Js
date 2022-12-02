function solution(k, m, score) {
  //k = 최상품 사과
  // 가장 낮은 점수 p 
  // 사과 한박스 가격  p * m
  // 사과를 m 개씩 담아서 포장한다.
  score.sort((a,b)=>b-a)
  console.log(score)
  // 12개 4개씩 3박스 
//   const boxlength = Math.floor(score.length / m)
//   const boxMax = boxlength * m
  let box = []
  let count = 0
  for(let i = 0; i < score.length; i ++){
      if(box.length === m){ // m 값이랑 같아지는 시점 박스가 풀 
          count += Math.min(...box) * m;
          box = []
          if(box.length === 0){
              box.push(score[i])
          }
      }else{
          box.push(score[i])
      }
    }
    return count
} 
solution(3,4,[1, 2, 3, 1, 2, 3, 1])

// let count = 0 
// //  
// for(let i = 0; i < Math.floor(score.length/m); i++){
//   for(let j = 0; j< m; j++){
//     console.log('제이',score[j])
//   }    
// }
// }

// 다른분 코드 
// function solution(k, m, score) {
//     let answer = 0;
//     score.sort((a, b) => a - b);
//     while (score.length >= m) {
//       let box = [];
//       for (let i = 0; i < m; i++) {
//         box.push(score.pop());
//       }
//       answer += Math.min(...box) * m;
//     }
//     return answer;
//   }