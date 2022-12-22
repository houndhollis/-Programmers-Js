function solution(cacheSize, cities) {
    // 참고 https://dailylifeofdeveloper.tistory.com/355
    // 오래된것을 제거하는 방식 , 캐시 힛은 데이터가 있으면 1 없으면 5 증가
    // 캐쉬사이즈는 담을수 있는 데이터 수? 
    const words = cities.map((it)=> it.toLowerCase())
    let count = 0;
    const database = []
    for(let i = 0; i < words.length; i++) {
        console.log(words[i],count)
        if(database.length < cacheSize){
            if(database.includes(words[i])){
                count += 1
            }else {
                count += 5
                database.push(words[i])
            }
        }else if(database.includes(words[i])){
            count += 1
        }else {
            database.splice(0,1)
            database.push(words[i])
            count += 5
        }
    }
    console.log(count)
}
solution(5,["SEOUL", "SEOUL", "SEOUL"])