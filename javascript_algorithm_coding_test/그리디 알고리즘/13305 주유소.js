let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV= fs.readFileSync(inputPath).toString().split('\n')

let number=Number(inputV[0])
let dist=inputV[1].toString().split(' ').map(Number)
let cost=inputV[2].toString().split(' ').map(Number)
//첫째줄 노드 개수
//둘째 줄 노드 간 거리 정보
//셋째 줄 노드의 비용

//현재 가장 작은 노드에서 충전해야함.
let answer=BigInt(0)
let min=cost[0]
for(let i=0;i<number-1;i++){//마지막 노드는 확인할 필요 없음
    if(min>cost[i]){
        min=cost[i]
    }
    // console.log(answer)
    answer+=BigInt(dist[i])*BigInt(min)
}

console.log(answer.toString())