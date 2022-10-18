function solution(n, arr1, arr2) {

  const arr3 = []
  const arr4 = []
  const arr5 = []
  const result = []
  const final = []


  for(let i = 0; i < n; i++){
    arr3.push(convertToBinary1(arr1[i]))
    arr4.push(convertToBinary1(arr2[i]))
  }
  function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
    }
    return Number(binary.padStart(n,0))
  }

  for(let i = 0; i < n; i++){
    result.push(arr3[i]+arr4[i])
  }
  const arry = arr5.concat(result.join(' ').replace(/2/gi,'1')
  .replace(/1/gi,'#').split(' '))
  
  for(let i = 0; i < n; i++){
    final.push(arry[i].padStart(n,'0').replace(/0/gi,' '))
  }
  return final
}
solution(6,[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10])


// ["######","###  #","##  ##"," #### ","#####","### # "]
// ["######","###  #","##  ##"," #### "," #####","### # "]