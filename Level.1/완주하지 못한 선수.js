function solution(participant, completion) {
    participant.sort()
    completion.sort()
   for(let i = 0; i < participant.length; i ++ ){
       if(participant[i] !== completion[i] ){

           return participant[i]
       }
   }
}



solution(["leo", "kiki", "eden"],["eden", "kiki"])





// 첫번쨰 풀이
// participant.map((it,idx)=>{
//     for(let i = 0; i<completion.length; i++){
//         if(it === completion[i]){
//             participant.splice(idx,1)
//         }
//     }
// })
// console.log(participant)

//두번째 풀이
// function solution(participant, completion) {
//     const idx = participant.findIndex((it)=>{
//         for(let i = 0; i <completion.length; i++){
//             if(it.includes(completion[i])){
//                 participant.splice(idx,1)
//             }
//         }
//     })
// }
// solution(["leo", "kiki", "eden"],["eden", "kiki"])

// 다른사람 풀이
// participant = participant.sort();
// completion = completion.sort();
// console.log(participant)
// console.log(completion)
// for (let i = 0; i < completion.length; i++) {
//   if (participant[i] !== completion[i]) return participant[i];
//   console.log(i,participant[i])
// }
// return participant[participant.length - 1]

// 뭔소린지 1도이해안간다.