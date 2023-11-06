fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')


let t=Number(inputV[0])
let dp=new Array(100).fill(-1)
dp[0]=1
dp[1]=1
dp[2]=1
for(let i=3;i<100;i++){
    dp[i]=dp[i-2]+dp[i-3]
}

let result=''
for(let i=1;i<=t;i++){
    let n=Number(inputV[i])
    result+=`${dp[n-1]}\n`

}

console.log(result)