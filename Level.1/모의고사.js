function solution(answers) {
    
    const sts = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
   
    const resultScore = [0,0,0]
    const result = []
    
    for(let i = 0; i < resultScore.length; i ++){
      resultScore[i] = answers.map((it,idx) => it === sts[i][idx%sts[i].length]).length
    }

    for(let i = 0; i < resultScore.length; i++){
      if(resultScore[i] === Math.max(...resultScore)){
        result.push(i+1)
      // i 가 0 부터 시작이니깐 + 1
      }
    }
    return result

}
solution([1,3,2,4,2])