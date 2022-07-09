function solution(s) {
 let sArr = s.split(' ',-1)
 let result = []
 for(let i = 0; i <sArr.length; i++){
     for(let j = 0; j<sArr[i].length; j++){
      j%2===0?result.push(sArr[i][j].toUpperCase()):result.push(sArr[i][j])
    }
    result.push(' ')
  }
 console.log(result.join(''))
}

solution("try hello world my life abd aasd a a a sd dddd ") //TrY HeLlO WoRlD TrY HeLlO WoRlD

