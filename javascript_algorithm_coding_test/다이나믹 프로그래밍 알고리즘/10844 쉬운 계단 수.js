fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(inputV[0])

let dp=Array.from(Array(N+1),()=>{
    return Array(10).fill(0)
})

dp[1][0]=0
for(let i=1;i<10;i++){
    dp[1][i]=1
}

for(let len=2;len<N+1;len++){
    for(let i=0;i<10;i++){
        if((i-1)>=0 ){
            dp[len][i]+=dp[len-1][i-1]
        }if((i+1)<10){
            dp[len][i]+=dp[len-1][i+1]
        }
        dp[len][i]%=Number(1e9)
    }
}


let result=0
for(let i=0;i<10;i++){
    result+=dp[N][i]
    result%=Number(1e9)
}

console.log(result)