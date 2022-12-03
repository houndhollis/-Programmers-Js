function solution(survey, choices) {

  let num = [3,2,1,0,1,2,3]
  const list = {
    R:0,T:0,C:0,F:0,j:0,M:0,A:0,N:0
  }

  for(let i = 0; i < survey.length; i++){
    const subject = survey[i]
    if (choices[i] < 4) {
      list[subject[0]] += num[choices[i] - 1];
    } else if (choices[i] > 4) {
      list[subject[1]] += num[choices[i] - 1];
    }
  }
  console.log(list)
}


solution(["AN", "CF", "MJ", "RT", "NA"],[5, 3, 2, 7, 5]	) 
//"TCMA"

