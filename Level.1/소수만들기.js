function solution(nums) {
  let num = 0
  let count = 0
  nums.sort()
  console.log(nums)
for(let i = 0; i<nums.length; i++){
  for(let j =i+1; j<nums.length; j++){ // i 0 
    for(let k = j+1; k<nums.length; k++){
      num = nums[i] + nums[j] + nums[k]
      isPrime(num)
       
    }   
  }
  function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for(let i = 2; num > i; i++) {
    if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
     }
    }
   // 소수는 1보다 큰 정수임으로
   // 1보다 작으면 false를 리턴한다
   return count++
 }
}
 return count 
}
solution([1,2,7,6,4])