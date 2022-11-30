function solution(arr) {
    // 코드가 더럽지만 완료...
    arr = arr.sort((a,b)=>a-b)
    let i = 1
    let count = arr.length - 1
    while(true){
        // [2,6,8,14]
      let mult = arr[arr.length-1] * i
      for(let j = 0; j < arr.length-1; j ++){
          if(mult % arr[j] === 0){
             count --
             if(count === 0) return mult
          }else{
              count ++
          }
      }
      i++
      count = arr.length - 1
    }
}
solution([2,6,8,14])