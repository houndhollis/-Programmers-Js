function solution(arr1, arr2) {
    // 1,4 | 3,2 | 4,1  ,  3,3 | 3,3 
    // 15,15 | 15,15 | 15,15
    const result = []
    const preArry = []
    for(let i = 0; i < arr1.length; i++ ){
        for(let j = 0; j < arr2[0].length; j++) {
            // 어차피 값은 자릿수는 똑같으니깐 [0] 으로 잡아준다.
            let count = 0
           console.log(arr1[i][j]) // 다 잘나옴
           for(let k = 0; k < arr2.length; k++ ){
              count += arr1[i][k] * arr2[k][j]
              console.log(count)
              // 1 * 3 , 4 * 3 
           }
           preArry.push(count)
        }
        result.push(preArry)
    }
    return result
}
solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]])