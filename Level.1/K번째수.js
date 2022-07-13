function solution(array, commands) {

    // [1,5,2,6,3,7,4] 에서 i = 2, j = 5, k = 3;
    // 2번째 수부터 5번째 숫자까지 자를경우
    // [5,2,6,3] > 정렬하면 [2,3,5,6]
    // 여기서 이제 3번째 숫자는 5다 그것을 배열로 만들고
    // commands 는 파라미터로 i,j,k를 받는다 
    const result = [];
    // console.log(array.slice(1,5).sort((a,b)=>a-b)[2])
    // .sort((a,b)=>a-b)[commands[i][2]-1]
    // console.log(commands[0][2]-1)
    // i -1  ,j , k-1
    for(let i = 0; i<commands.length; i++){
      let number = array.slice((commands[i][0]-1),commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1]
      result.push(number)
      }
      return result
    }
    solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])