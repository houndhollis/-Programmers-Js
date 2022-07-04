function solution(s, n) {
    const smallA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const bigA = smallA.join('').toUpperCase().split('')
    let result = ""
    for(let i = 0; i<s.length; i++){
       if(s[i]=== ' '){
          result = result + ' '
       }else if(smallA.includes(s[i])){
        let snumber = smallA.findIndex(el => el === s[i])
        if(smallA[snumber+n]===undefined){
           result = result + smallA[snumber+n-26]
        }else{
           result = result + smallA[snumber+n]
        }
       }else{
         let Snumber = bigA.findIndex(el => el === s[i])
         if(bigA[Snumber+n] === undefined){
           result = result + bigA[Snumber+n-26]
         }else{
           result = result + bigA[Snumber+n]
         }
       }
    }
    return result
  }
  
  solution("ab",1)

  // 정말 무식하게 푼거같긴 한데 그래도 풀었다..
  // 각 조항들을 전부다 if 문으로 담은거 같다.