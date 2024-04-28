const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let N=Number(input[0])

let dp=new Array(N+1).fill(1e9)
let path=new Array(N+1).fill().map(()=>new Array())
dp[1]=0
path[1]=[1]


for(let i=2;i<=N;i++){
    dp[i]=dp[i-1]
    let prev=i-1
    if(i%3===0 ){
        let p3=Math.floor(i/3)
        if(dp[i]>dp[p3]){
            dp[i]=dp[p3]
            prev=p3
        }

    }if(i%2===0){
        let p2=Math.floor(i/2)
        if(dp[i]>dp[p2]){
            dp[i]=dp[p2]
            prev=p2
        }
    }

    dp[i]++
    path[i].push(...path[prev])
    path[i].push(i)



}

console.log(dp[N])
console.log(path[N].reverse().join(' '))
