fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(inputV[0])
let arr=inputV[1].split(' ').map(Number)
let dp=Array(N).fill(1)

arr.reverse()

for(let i=0;i<N;i++){
    for(let j=0;j<i;j++){
        if(arr[j]<arr[i]){
            dp[i]=Math.max(dp[j]+1,dp[i])
        }
    }
}

console.log(N-Math.max(...dp))