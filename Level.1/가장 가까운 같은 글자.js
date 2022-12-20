function solution(s) {
    const arr = []
    const answer = []

    for(let i = 0; i < s.length; i ++ ){
        if(!arr.includes(s[i])){
            answer.push(-1)
            arr.push(s[i])
        }
        for(let j = 0; j < i; j ++){
            if(s[i] == s[j]){
                answer.push(i-j)
            }
        }
    }
    console.log(answer)
}
solution('banana')