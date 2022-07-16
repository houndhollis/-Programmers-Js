function solution(s) {
    const arrs = []
    const arrS = []
   for(let i = 0; i<s.length; i++){
     if(s[i] === s[i].toUpperCase()){
         arrS.push(s[i])
     }else{
         arrs.push(s[i])
     }
   }
   return arrs.sort().reverse().join('')+arrS.sort().reverse().join('')
}

// 또다른 풀이
function solution(s) {
    console.log(s.split('').sort().reverse().join(''))
}
solution("Zbcdaefg")
