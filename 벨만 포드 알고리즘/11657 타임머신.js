const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')
let edges=[]
//음수 거리에 대해서 최단 경로 구하기
let [N,M]=input[0].split(' ').map(Number)

let INF=1e9
let distance=new Array(N+1).fill(INF)
for(let i=1;i<=M;i++){
    edges.push(input[i].split(' ').map(Number))
}

function bf(start){
    distance[start]=0

    for(let i=0;i<N;i++){
        for(let [cur,nextNode,dist] of edges){
            if(distance[cur]!==INF && distance[nextNode]>distance[cur]+dist){
                distance[nextNode]=distance[cur]+dist

                if(i===N-1){
                    return false //음의 순환 발생,
                    // n-1 번 돌면 이미 최단 거리가 구해져야하는데 n번째에서도 최단 거리가 갱신된다면 음의 순환이 발생하는 것
                }
            }


        }
    }
    return true

}

let result=''
let nonCycle=bf(1)
if(nonCycle){
    for(let i=2;i<=N;i++) {
        if (distance[i] === INF) {
            result += `-1\n`
        } else {
            result += `${distance[i]}\n`
        }
    }
    console.log(result)
}else{
    console.log(-1)
}