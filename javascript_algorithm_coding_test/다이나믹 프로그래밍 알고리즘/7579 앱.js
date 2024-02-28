fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)

let memory=input[1].split(' ').map(Number)
let cost=input[2].split(' ').map(Number)

let maxCost=10001

let dp=Array.from(Array(N+1),()=>{
    return new Array(maxCost).fill(0)
})


for(let i=1;i<=N;i++){
    for(let c=0;c<maxCost;c++){
        dp[i][c]=Math.max(dp[i][c],dp[i-1][c])
        if(c>=cost[i-1]){
            dp[i][c]=Math.max(dp[i][c],dp[i-1][c-cost[i-1]]+memory[i-1])
        }
    }
}

let result=maxCost
for(let i=1;i<=N;i++){
    for(let c=0;c<maxCost;c++){
        if(dp[i][c]>=M){
            result=Math.min(result,c)
        }
    }
}

console.log(result)