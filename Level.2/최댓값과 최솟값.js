function solution(s) {
  s = s.split(' ')
  const num = []
  for(let i = 0; i < s.length; i++){
    num.push(Number(s[i]))
  }
  return String(Math.min.apply(null,num))+' '+String(Math.max.apply(null,num))
}
solution("1 2 3 4")