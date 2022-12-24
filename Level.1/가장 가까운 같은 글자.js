function solution(s) {
    const arr = []
    const answer = []
    for(let i = 0; i < s.length; i ++ ){
        console.log(answer)
        if(!arr.includes(s[i])){
            //arr 배열에 들어오는 값 s[i]가 업없으니깐 answer 배열에 -1 추가하고 
            // arr.push 배열에는 s[i] 값 넣어주기
            answer.push(-1)
            arr.push(s[i])
            continue;
        }
        if(arr.includes(s[i])){
            // console.log(arr.length, arr.lastIndexOf(s[i]))
            // 전체 길이에서 해당값 arr 에서 뒷쪽으로 index 값 찾아서 빼준다 그후 위에랑 똑같이 반복 
            answer.push(arr.length - arr.lastIndexOf(s[i]))
            arr.push(s[i])
        }
    }
    console.log(answer)
    return answer
}
solution('banana')
