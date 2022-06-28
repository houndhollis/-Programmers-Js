function solution(arr) {
    let newArr = arr.reduce((arr,cur)=>arr+cur)
    return newArr/arr.length
   }

   //간단하게도 쓸수있다 
   // 바로 리턴을 붙이고 나눠버리기~!