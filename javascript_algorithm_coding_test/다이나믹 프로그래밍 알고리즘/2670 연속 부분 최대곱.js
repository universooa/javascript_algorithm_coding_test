fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(inputV[0])
let dp=[]
for(let i=1;i<=N;i++){
    dp.push(Number(inputV[i]))

}

for(let i=1;i<dp.length;i++){
    dp[i]=Math.max(dp[i],dp[i-1]*dp[i])
}

console.log(Math.max(...dp).toFixed(3))