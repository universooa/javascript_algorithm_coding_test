const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let Tc=Number(input[0])

for(let i=1;i<=Tc;i++){

    [N,M]=input[i].split(' ').map(Number)
    result=0
    dp=Array.from(Array(M+1),()=>{
        return new Array(N+1).fill(0)
    })


    binomialCoefficient(M,N)
    console.log(dp[M][N])
}

function binomialCoefficient(n,r){
    if(r===0 || n===r){
        dp[n][r]= 1
        return 1
    }

    if(dp[n][r]!==0){
        return dp[n][r]
    }

    dp[n][r]= binomialCoefficient(n-1,r-1)+binomialCoefficient(n-1,r)
    return dp[n][r]

}