function solution(n) {
    let arr =[] 
    // 약수니깐 n의 반만 찾으면된다.
    // 그이후는 나누어 안떨어지니깐.
    for(let i = 1; i<= n/2; i++){ 
        if(n%i===0){
           arr.push(i)
        }
    }
    arr.push(n)
    return arr.reduce((arr,cur)=>arr+cur)
}