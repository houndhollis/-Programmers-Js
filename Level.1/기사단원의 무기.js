function solution(number, limit, power) {
    const arry = []

    // 약수 개수 구하는 함수
    function getDivisor (n) {
    let count = 0
    for(let  i = 1; i <= n/2; i++){
      if(n % i === 0){
          count ++
            }
        }   
    arry.push(count+1)
    // 반으로 나눠서 자기자신까지
    } 
    // 숫자 함수에다가 넣기
    for(let i = 1; i <= number; i ++) {
        getDivisor(i)
    }
    return arry.map((it)=>it > limit? power : it).reduce((a, b) => a + b, 0)
}
solution(10,3,2)

