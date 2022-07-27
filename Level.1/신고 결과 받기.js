function solution(id_list, report, k) {
    const x = []; //[ 'muzi', 'apeach', 'frodo', 'muzi', 'apeach' ]
    const y = []; //[ 'frodo', 'frodo', 'neo', 'neo', 'muzi' ]
    const obj ={};
    const obj2 = {};
    const test1 = new Set([report])
    const test2 = [...test1]
    // console.log(test2[0][4].split(' '))

    for(let i = 0; i< report.length; i++){
        let test3 = test2[0][i].split(' ')
        // console.log(test3)
        console.log(test3[0],test3[1])
        if(Object.keys(obj).includes(test3[0])){
            obj2[test3[0]]=test3[1]
        }else{
            obj[test3[0]]=test3[1]
        }
       x.push(test3[0])
       y.push(test3[1])
    }


}
solution(["muzi", "frodo", "apeach", "neo"],
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
         2)



// 내가 졌다 남이작성한 코드...
function solution(id_list, report, k) {
    //report를 set을 이용하여 중복제거, 각 id 당 신고당한 횟수 reportedCount에 저장,
    //각 id를 신고한 사람 array를 reportedBy에 저장,
    //k번 이상 신고당한 id를 신고한 id가 받을 메일 수를 mailCount에 저장
    //answer에 mailCount에 저장된 값을 id_list와 같은 id 순서로 저장.
    const reportSet = new Set(report);
    const reportedCount = {}; //{"id": Number(count)} 신고당한 횟수
    const reportedBy = {}; //{"id":[]} 신고한 사람 !
    const mailCount = {}; //{"id":Number(count)} 메일받는?
  
    id_list.forEach((element) => {
      reportedCount[element] = 0;
      mailCount[element] = 0;
      reportedBy[element] = [];
    });
    // 각 각 초기화 시켜주기
  
    reportSet.forEach((element) => {
      const [id, reported] = element.split(" "); // 구조분해 할당
      reportedCount[reported] += 1;  // 카운트양 증가
      reportedBy[reported].push(id); // id 추가
    });
  
    for (const reportedId in reportedCount) {
      if (reportedCount[reportedId] >= k) {
        reportedBy[reportedId].forEach((reporter) => {
          mailCount[reporter] += 1; // 넘는 사람 메일 
        });
      }
    }
    return id_list.map((id) => mailCount[id]);
  }