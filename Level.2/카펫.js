function solution(brown, yellow) {
  // 전체 크기는 = brown + yellow
  // 가로는 세로 와 같거나 길다
  // brown + yellow = arr[0] * arr[1]
  // brown 은 yellow 보다 가로 세로가 2만큼 길다
  // B B B
  // B Y B   solution (8,1) ==> [3,3]
  // B B B   solution (10,2) ==> [4,3]
  // 

  // B B B B
  // B Y Y B  Y 의 값은 높이 -2 가로 -2 값이 옐로우인 애들 
  // B B B B

  let WH = brown + yellow
  for(let h = 3; h < brown; h++){
    // 높이는 갈색보단 작을거다.
    if(WH % h === 0){
      let width = WH / h;
      // if(width > h){
      //   return [width,h]
      //   // 여기서 막혔다.
      // }
      if((width-2)*(h-2)===yellow){
        return [width,h]
      }
    }
  }
}
solution(10,2) // [4,3]