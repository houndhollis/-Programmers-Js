# 해시

> 해시란?

- 데이터 관리,유지 하는 자료구조 리소스를 포기하고 속도를 취한것이다.
- 데이터들이 와서 해시함수에 의해 분류 된것을 해시 테이블 이라고한다.

분류된 데이터들은 해시테이블로 규칙에 맞게 들어간다 이러한 작업을 해싱이라고 한다.
또한 해시의 장점은 데이터 접근속도가 빠르다는 것이다, 그렇지만 해시도 문제점이있다.
충돌 문제가 있는데 대처하는 방법이 2가지가 있다.

> Chaining 
해당 해당 인덱스에 값이있어도 그 뒤에 리스트 형식처럼 추가하는 방법이다.

> Linear Probing (선형탐색방법)
테이블을 만들어놨지만 데이터가 계속 같은 인덱스 자리에 리스트처럼 뒤에 붙어서 리소스를 잡아먹는 방식을 해결하기 위해 인덱스의 자리를 차지하고 있으면 다음 인덱스 자리로 밀어넣는 방식이다 이렇게해서 테이블에 할당된 공간이 없으면,

> 테이블 리사이징
더이상 엘리멘트가 들어갈 자리가 없으면 테이블의 크기를 늘려서 기존에 있던애들을 넣어주고 다시 재정렬을 시켜준다.

```
                       index    Value
key_1                    0      value_1
key_2   Hash Function    1      value_2
key_3                    2      value_3
                         3      value_4 
```


              
            
