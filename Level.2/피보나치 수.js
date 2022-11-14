function solution(n) {
  // 기본 설정 i 인덱스 2부터 시작
  let result = [0 , 1]
  for(let i = 2; i <= n; i++){
   result.push((result[i-2] + result[i-1]) % 1234567)
  }
  return result[n]
}
solution(3) // 2 