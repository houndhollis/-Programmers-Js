function solution(seoul) {
  const kimIndex = seoul.findIndex((el)=>(el==='Kim'))
  // 파인드 인덱스로 배열을 한번씩 순회하면서 Kim을 가진 인덱스 번호를 찾는다.
   return `김서방은 ${kimIndex}에 있다` // 킴 인덱스를 넣어준다.
 }