function solution(number) {
  number.sort((a,b)=>a-b)
  let count = 0;
  for (let i = 0; i <= number.length-2; i++) {
      for (let j = i+1; j <= number.length-1; j++) {
          for (let n = j+1; n <= number.length; n++) {
              if (0 === number[i] + number[j] + number[n]) {
                  count++;
              }
          }
      }
  }
  return count;
}