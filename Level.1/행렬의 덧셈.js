function solution(arr1, arr2) {
    let result = arr1
 
    for(let i = 0; i<arr1.length; i++){ // arr1[0][0]+arr2[0][0] // arr1[0][1]+ arr2[0][1]
      for(let j = 0; j<arr1[i].length; j++){
        arr1[i][j] = arr1[i][j] + arr2[i][j] 
      }
    }
    console.log(result)
 }
 
 solution([[1,2],[2,3]],[[3,4],[5,6]])
 // 처음시도 아래 
 // let arr = []
 
 // for(let i = 0; i<arr1.length; i++){ // arr1[0][0]+arr2[0][0] // arr1[0][1]+ arr2[0][1]
 //   for(let j = 0; j<arr1[i].length; j++){
 //       arr.push(arr1[i][j] + arr2[i][j])
 //   }
 // }
 // return arr
 // }