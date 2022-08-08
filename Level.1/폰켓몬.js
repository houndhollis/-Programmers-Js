function solution(nums) {
    const nl = nums.length
    const get = nl /2 
    const set = new Set(nums)
    if(set.size < get){
      return set.size
    }else{
      return get
    }
    // 왜 풀린지 모르겠다 진짜모르겠다.
  }