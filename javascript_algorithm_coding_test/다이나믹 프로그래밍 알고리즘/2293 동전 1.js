fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let [N,K]=input[0].split(' ').map(Number)
let coins=[]

for(let i=1;i<=N;i++){
    coins.push(Number(input[i]))
}

let dp=new Array(K+1).fill(0)

dp[0]=1

for(let i=1;i<=N;i++){
    for(let j=1;j<=K;j++){
        if(j>=coins[i-1]){
            dp[j]+=dp[j-coins[i-1]]
        }
    }
}

console.log(dp[K])