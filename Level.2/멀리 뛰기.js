function solution(n) {
    // 느낌은 알겠는데...
    // 사실잘 모르겠다.........
    let result = [1 , 1]
    for(let i = 2; i < n; i++){
     result.push((result[i-2] + result[i-1]) % 1234567)
    }
    return result[n + 1]
}
solution(4)