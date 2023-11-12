fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(inputV[0])
let dp=Array(N+1).fill(1e6+1)

dp[1]=0
for(let i=2;i<=N;i++){
    dp[i]=dp[i-1]
    if(i%3===0){
        dp[i]=Math.min(dp[i],dp[Math.floor(i/3)])
    }if(i%2===0){
        dp[i]=Math.min(dp[i],dp[Math.floor(i/2)])
    }
    dp[i]++
}

console.log(dp[N])
