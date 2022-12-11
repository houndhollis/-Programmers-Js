function solution(citations) {
    citations.sort((a,b)=>b-a)
  //  [3,0,6,1,5]
  //  [6,5,3,1,0] 일때 논문수는 5편  
    console.log(citations)// [6,5,4,3,2,1,0]
    let result = 0; // 
    for(let i = 0; i<citations.length; i++ ){
       if(citations[i]>= i+1){
         result= i+1
       }
    }
    return result
  }