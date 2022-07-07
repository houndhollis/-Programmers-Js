function solution(arr){
 if(arr.length>1){
    let idx = arr.indexOf(Math.min(...arr))
    arr.splice(idx,1)
 }
 return arr.length === 1? [-1]:arr;
}
console.log(solution([10]))