function solution(n,a,b) {
    // 첫 번째 라운드에서 4번 참가자는 3번 참가자와 붙게 되고, 7번 참가자는 8번 
    let count = 1;
    let left = a > b ? b : a;
    let right = a > b ? a : b;
    // 작은수 4, 큰수 7
    while(!(left%2===1 && right === left + 1)){
        count ++;
        left = parseInt((left+1)/2);
        right = parseInt((right+1)/2);
    }
    return count
}
solution(8,4,7) // 3 이 나와야 한다. 
