function solution(s) {
    const stack = []
  for(let i = 0 ; i < s.length; i++){
      if(stack[stack.length - 1] === s[i]){
          stack.pop()
      }else{
          stack.push(s[i])
      }
  }
  return stack.length === 0 ? 1 : 0
}
// 이방식으로 하니깐 틀렸다 그래서 s 를 split('') 으로 해주니깐 통과가 되었다 
// 뭔가 배열이 순회할때 문자열보다 더 빠른거 같다, 내 생각 이다.
solution('baabaa')
// 'bbaa'
// 스택에 스택.렝스 - 1 === 첫번째랑 같으면 pop, push
// 스택.push [i]
// 스택 
// [] === 0 ? 1 : 0



// 나의 첫번째 시도
// function solution(s) {
//     const arr = s.split('')
//     let lastI;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             lastI = i
//             arr.splice(i,2)
//             i = lastI - 2
//             if(arr.length === 0){
//                 break;
//             }
//         }
//     }
//     return arr.length ===0 ? 1:0
// }