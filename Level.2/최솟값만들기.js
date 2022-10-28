function solution(A,B){
  A = A.sort((a,b)=>a-b)
  B = B.sort((a,b)=>b-a)
  let result = 0
  for(let i = 0; i < A.length; i++){
  result += A[i] * B[i]
  }
  return result
}
solution([1,4,2],[5,4,4])