fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(input[0])

let arr=input[1].split(' ').map(Number)
let dp=new Array(N).fill(1)

dp[0]=1

for(let i=1;i<N;i++){
    for(let j=0;j<i;j++){
        if(arr[j]<arr[i]){
            dp[i]=Math.max(dp[i],dp[j]+1)
        }
    }
}

console.log(Math.max(...dp))