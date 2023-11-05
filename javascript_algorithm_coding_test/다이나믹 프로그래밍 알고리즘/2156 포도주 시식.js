fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let n=Number(inputV[0])
let result=0

let arr=[]
for(let i=1;i<=n;i++){
    arr.push(Number(inputV[i]))
}


let dp=new Array(n).fill(-1)
dp[0]=arr[0]
dp[1]=arr[0]+arr[1]
dp[2]=Math.max(dp[1],dp[0]+arr[2],arr[1]+arr[2])
for(let i=3;i<arr.length;i++){
    dp[i]=Math.max(dp[i-1],dp[i-2]+arr[i],arr[i]+arr[i-1]+dp[i-3])
}

console.log(dp[n-1])

