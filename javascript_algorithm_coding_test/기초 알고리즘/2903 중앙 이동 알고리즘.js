const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])
let topPoint=2

for(let i=0;i<N;i++){
    topPoint=2*topPoint-1 //다음 단계로 갈 때 맨 위의 점의 개수는 N+N-1이 됩니다
}


console.log(topPoint*topPoint) //맨 위의 있는 점들(가로)*행의 개수->겹치는 거 없는 점의 개수