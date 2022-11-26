function solution(s){
  // 무조건 짝이 맞아야한다. 첫번째로 ) 가오면 폴스
  // 짝다 맞추고 ( 가 남아도 폴스 
  // 하나씩 소거해주기!
  let count = 0
  for(let i = 0; i < s.length; i++){
      if(s[0] === ')'){
      return false
      }
      if(s[i]==='('){
      count += 1
      }
      if(s[i]===')'){
      count -= 1
          if(count < 0){
           return false
          }
      }
  }   
  return count === 0 ? true : false
}
solution("()()(")