function solution(a, b) {
    if(a === b){
      return a
    }  // 간단하게 두 수를 양쪽 끝으로 두고 a가 더 크경우 b가더 
    // 클 경우를 생각해서 만들었다.
    let sum = 0;
    if(a<b){
      for(let i = a; i<= b; i++){
        sum += i
      }
    }else if(b < a){
      for(let j = b; j<=a; j++){
        sum += j 
      }
    }
    return sum
  }
