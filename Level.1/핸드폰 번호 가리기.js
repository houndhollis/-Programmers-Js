function solution(str) {
  let answer = str.slice(-4);  // 뒤에 4자리
  str = str.slice(0,str.length-4)  // 뒤에 4자리 제외

  for(let i = 0; i<10; i++){ 
    let regexObj = new RegExp([i],'gi') 
    str=str.replace(regexObj,'*') // 가리기
}
  return str+answer; // 합쳐주기
}