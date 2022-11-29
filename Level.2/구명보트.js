function solution(people, limit){
    // 리밋을 넘으면 안된다.
    // 최대 두명만 탈수 있다.
    // 소트후 앞뒤 부터 확인 차례가 지나가면 카운터 + 1 
    // 1 1 1 1
    // O     O //1
    // O   O   //2
    // O O     //3 
    people = people.sort((a, b) => a - b)
    let count = 0
    let left = 0
    let right = people.length - 1

    while(left <= right){
        if(people[left] + people[right] <= limit){
           left++
        }
        count++
        right--
    }
    return count
}
solution([70, 50, 80, 50],100)