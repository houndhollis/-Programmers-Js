# 선택정렬
- 계속해서 작은값을 앞으로 옮기는 것이다
작은 값을 저장할 변수를 선언한다음 시작값으로 초기화를 한다

```
const arr = [3,5,4,2,1]
let min = 3 // 2는 3보다 작으니깐 min 값을 2 그리고 1로 바꿔준다.
min = 1; // 그럼 이제 제일 작은 1을 맨앞으로 보내준다
arr = [1,5,4,2,3] // 이런식으로 옮겨준다.

// 최종적으로는 계속 바꿔준다.
arr = [1,2,3,4,5] 
// 가 되어준다 앞에서 부터 한칸씩 가면서 전체 배열방을 돌기 때문에
O(n2)만큼 시간이 든다 
```

# 삽입정렬
- 가장 간단한 정렬 방식이다
- 사이 에다가 끼어서 삽입하는 방식이다
```
const arr1 = [8,5,6,2,4]
8,5,6,2,4
5,8,6,2,4 = 1회전 8이랑 5를 비교해서 작은것을 앞으로 보낸다
5,6,8,2,4 = 2회전 6이랑 8을 비교해서 6을 앞으로 보낸다 > 다음은 2를 가지고 앞부터 비교한다
2,5,6,8,4 = 3회전 2를 가지고 맨앞부터 비교를 해서 결과를 산출한다 > 다음은 4를 가지고 앞부터 비교
2,4,5,6,8 = 4회전 가장 간단하게 비교를 해서 자리를 바꾼다.

// 최종결과는 [2,4,5,6,8]
