# 버블정렬

> 진행 코드
```
function getSort(arr){
    for(let i = 0; i<arr.length; i++){
      let temp;
      for(let j =0; j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
          temp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = temp
        }
      }
    }
    console.log(arr) //[ 2, 4, 6, 7, 9, 10 ]
  }
  getSort([7,10,2,9,4,6])
```
- 비구조 할당을 이용한 방식같기도 하다
```
c = b
b = a
a = c
```
- 진행되지만 중간에 if 문을 통해서 break를 밞아줘야한다.
알고있으면 나중에라도 sort 함수대신에 사용할? 경우가 있을 때 사용하면 유용할듯 하지만
sort 함수가 대단한거같다 

