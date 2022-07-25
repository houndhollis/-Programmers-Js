function solution(left, right) {
    let result = 0
    for(let i = left; i <= right ; i++){// 13~17
        let count = 0
        for(let j = 1; j <= i; j++ ){// j = 13; 
            if(i % j === 0 ){
              count ++
        }
        if(i===j & count%2===0){
            result += i
        }else if(i===j & count%2===1){
            result -= i
        }
    }
 } 
    return result
}
solution(13,17)


