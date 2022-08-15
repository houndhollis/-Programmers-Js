function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase()
    // 2단계 (소문자,-,_,.,숫자,제외 나머지 삭제)
    new_id = new_id.replace(/[^\w-._]+/g,'') // 정규표현식
    // 3단계
    new_id = new_id.split('').filter((x,idx)=>new_id[idx]+new_id[idx+1] !== '..')
    // 4단계
    if(new_id[0]==='.'){
        new_id.shift()
    }
    if(new_id[new_id.length-1]==='.'){
        new_id.pop()
    }
    // 5단계
    if(new_id.length === 0){
        new_id.push('a')
    }
    // 6단계
    while(new_id.length >= 16){
        new_id.pop()
    }


    if(new_id[new_id.length-1]=== '.'){
        new_id.pop()
    }
    // 7단계
    while(new_id.length < 3){
        new_id.push(new_id[new_id.length-1])
    }
   return new_id.join('')
}
solution('=.=')