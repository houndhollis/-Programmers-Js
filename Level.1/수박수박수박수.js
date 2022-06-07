function solution(n) {
    let answer = '';
    // 홀수는 수, 짝수는 박 으로 나타낸다.
    // 전체 길이는 n이다.
    for(let i = 1; i <= n; i++){
      if(i%2===1){
      answer = answer + '수'
    }else if(i%2===0){
     answer = answer + '박'    
    }
  }
  return answer
}

// 나름 무식하게 푼거같은 느낌이 조금든다..
// 반복문을 한다음 두걀례로 나누웠다.