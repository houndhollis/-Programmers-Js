function solution(n) {

    let a = (Math.sqrt(n)+1)
    return Number.isInteger(a)?Math.pow(a,2):-1 
    
   }
   // 처음 3 이런숫자 안되서 isInteger 라는 메소드를 해서 정수를 
   // 판별해서 풀었다
   solution(3)