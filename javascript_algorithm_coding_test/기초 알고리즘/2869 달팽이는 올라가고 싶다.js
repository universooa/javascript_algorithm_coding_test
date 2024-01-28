const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let [A,B,V]=input[0].split(' ').map(Number)

let day= Math.trunc(V/(A-B))
//하루동안 이동할 수 있는 만큼 계산했을 때 몇일이 걸리는지 확인

//낮동안 도착할 수 있었는데 밤에 너무 깎아먹어서 못 도착한 날을 확인해야한다.
day=day-B-1 // 최악의 수는 하루에 움직일 수 있는 날에 미끄러진 수 뺀거
let meter=(A-B)*day

while(true){
    meter=(A-B)*day //지나간 날의 총 미터를 구함
    if( meter+A>=V){ //오늘 낮에 원하는 장소에 도착할 수 있는지 구함
        console.log(day+1)
        break
    }
    day++


}