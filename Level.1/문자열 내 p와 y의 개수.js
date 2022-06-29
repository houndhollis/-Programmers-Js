function solution(s){
    let newStr = s.toLowerCase()
    const pArr = [];
    const yArr = [];
    for(let i = 0; i <s.length; i++){
      if(newStr[i]==='p'){
        pArr.push(newStr[i])
      }else if(newStr[i]==='y'){
        yArr.push(newStr[i])
      }
      }
      if(pArr.length === yArr.length){
        return true
      }else{
        return false
      }
    }
    // 더 쉽게 푸는 방법을 찾아봐야겠다 일단 스플릿과 필터!