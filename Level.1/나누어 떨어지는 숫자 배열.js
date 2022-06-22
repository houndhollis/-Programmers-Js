function solution(arr, divisor) {
	const newArr = [];
	 for(let i = 0; i<arr.length;i++){
	 if(arr[i]%divisor === 0){
	   newArr.push(arr[i])
	 }
   }
   if(newArr.length === 0){ // 없을경우 예외처리
	   return [-1]
   }
   return newArr.sort((a,b)=>a-b) // 처음에 소트 안썻다가 하나가 틀렸다
 }