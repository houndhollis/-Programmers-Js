function solution(strings, n) {

  // n 의 인덱스의 번호 애들을 오름차순 순으로 정렬 해서 문자열 정렬하기
  // n = 1 일때 u,e,a  오름 차순으로 하면 a,e,u
  // sort 0을 기준으로 한다 0보다 작으면 앞쪽값이 먼저옴
  // 0보다 크면 큰값이 먼저
console.log(strings.sort((pre, next) => {
    if (pre[n] < next[n]){
      return -1
    }
    if (pre[n] === next[n]){
      return pre > next ? 1 : -1;
    }  
  }));
}
solution(["abce", "abcd", "cdx"],2)