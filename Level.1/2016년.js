function solution(a, b) {
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT',]
    if(a ===1 ||a=== 4 ||a=== 7){
      console.log(day[b+4],'첫번째')
    }
    if(a === 2 ||a=== 8 ){
      console.log(day[b])
    }
    if(a === 3 ||a=== 11){
      console.log(day[b+1])
    }
    if(a === 5){
    console.log(day[b-1])
    }
    if(a === 6){
    console.log(day[b+2])
    }
    if(a=== 9 || a=== 12){
      console.log(day[b+3])
    }
    if(a===10){
      console.log(day[b+5])
    }
   }// new Date() 이용방법 공부중.. 두개배열로 풀이도 공부중..