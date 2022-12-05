function solution(k, score) {
    const kLimitArr = []
    const result = []
    // 명예의 전당 수만큼 출연 가능
    // 매일 명예의 전당에서 가장 낮은 스코어가 발표점수가 된다.
    // 점수를 받고 명예의 전당 전일차 발표 점수보다 높으면 들어감
    for(let i = 0; i < score.length; i++) {
        if(i === 0) {
            kLimitArr.push(score[i])
            result.push(score[i])
        }
        if(i >= 1) {
            if(result[i-1] <= score[i]) { // 다음수를 넣기위한 빌드
                kLimitArr.push(score[i]) // 전날보다 높으면 추가한다. 
                kLimitArr.sort((a,b)=>a-b) // 그뒤로 sort를 진행하고 
                if(kLimitArr.length > k) { // 하지만 K 수를 넘을수는 없다..크크
                    kLimitArr.splice(0,1)  // 스플라이스로 짤라준뒤 
                    result.push(kLimitArr[0]) // 그거의 첫번째를 넣어준다.
                }else{
                    result.push(kLimitArr[0]) // 3을 안넘을때는 그냥 결과에 추가
                }
            } else {
                result.push(kLimitArr[0]) // 작을때는 그냥 작은수 추가 
            }
        }
    }
    return result
}

solution(3,[10, 100, 20, 150, 1, 100, 200])