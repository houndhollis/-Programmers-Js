function solution(s) {
  let zeroCount = 0
  let count = 0
  while(s !== '1'){
    count ++;
    let preleng = s.length; // 제거전 
    // 카운트는 어차피 게속 증가
    // 제거된 0의 개수 합치는게 중요 
    // 처음 s 의 길이 에서 변환후 s 의 길이가 제거된 0의 개수
    console.log('s의값',s) // 0을 제거했다. 
    s = s.split('').filter((it)=> it !== '0').join('') // 제거후 
    zeroCount += preleng - s.length;
    console.log('제로카운트',zeroCount)
    s = s.length.toString(2)
  }
  return [count, zeroCount]


  
}
solution("110010101001")