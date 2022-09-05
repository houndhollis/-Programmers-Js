function solution(board, moves) {
  let arr = [];
  let count = 0
  for(let i = 0; i < moves.length; i++){
    moveArr(moves[i])
  }
  function moveArr(e){
    for(let i = 0; i < board.length; i++){
      if(board[i][e-1]!==0){
        arr.push(board[i][e-1])
        board[i][e-1] = 0
        break;
      }
    }
  }

  for(let i = 0-arr.length; i < arr.length; i++){
    for(let j = 0; j <arr.length; j++){
      if(arr[j] === arr[j+1]){
        arr.splice(j,2)
        count += 2
      }
    }
  }

  return count
} 
