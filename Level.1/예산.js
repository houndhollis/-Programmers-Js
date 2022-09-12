function solution(d, budget) {
 d.sort((a,b)=> a-b)
 let count = 0;
 let sum = 0;
 let i = 0
 while(sum < budget){
  sum = sum + d[i]
  i++
  count++
 }
 return sum === budget? count:count-1 
}
solution([2,2,3,3],10)