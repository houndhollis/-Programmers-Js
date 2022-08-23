function solution(sizes) {
    //가로 60 세로 50  > 가로 50 세로 60
    // 30   70  >   70   30
    // 60   30  >   30   60
    // 80   40  >   40   80 
    let x = 0;
    let y = 0;
    for(let i = 0; i< sizes.length; i++){
        // 가로와 세로 비교해서 던 긴것 밑에는 더 짧은것.
        let a = 0;
        let b = 0
        if(sizes[i][0] < sizes[i][1]){
           a = sizes[i][1]
        }else{
           a = sizes[i][0]
        }
        if(sizes[i][0] < sizes[i][1]){
           b = sizes[i][0]
        }else{
           b = sizes[i][1]
        }
        console.log('a는',a,'b는',b)

        x = x < a ? a : x ;
        y = y < b ? b : y ;
    }
    return x*y
}
solution([[60, 50], [30, 70], [60, 30], [80, 40]])