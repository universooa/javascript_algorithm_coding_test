let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let N=Number(inputV[0])
let arr=[]

for(let i=1;i<=N;i++){
    arr.push(inputV[i].split(' ').map(Number))
}

// N-1 번째 집 먼저 구해야한다.
let dp=Array.from(Array(N),()=>{
    return Array(3).fill(0)
})

dp[0]=arr[0]
let oppositeColor=[[1,2],[0,2],[0,1]] //r,g,b의 다른 컬러들 -> [g,b],[r,b],[r,g] , r은0,g는 1,b는 2
for(let home=1;home<N;home++){
    for(let color=0;color<3;color++){
        // let tempMin=1001 // 누적합이므로 1000 보다 크다.
        let tempMin=1e7 // 비용 1000 에 N 개 일 수 있는데 N의 최대는 1000이어서 1000X1000이 최댓값이다
        for(let opColor of oppositeColor[color]){
            tempMin=Math.min(tempMin,dp[home-1][opColor])
        }
        dp[home][color]=arr[home][color]+tempMin
    }
}


//마지막 집 중에 최솟값인 것
console.log(Math.min(...dp[N-1]))