function solution(numbers) {
    const num = []
    for(let i = 0; i < numbers.length; i++){
        for(let j = 1; j<numbers.length; j++){
            if(i===j)continue;
            num.push(numbers[i]+numbers[j])
        }
    }
    return Array.from(new Set([...num])).sort((a,b)=>a-b)
}
solution([2,1,3,4,1])