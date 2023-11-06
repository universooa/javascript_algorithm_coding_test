fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let n=Number(inputV[0])
let dp=Array.from(new Array(n),()=>{
    return Array(n).fill(0)
})
let arr=[]
for(let i=1;i<=n;i++){
    arr.push(inputV[i].split(' ').map(Number))
}

dp[0][0]=arr[0][0]

for(let i=1;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(j===0){
            dp[i][j]=Math.max(dp[i-1][j]+arr[i][j])
        }else{
            dp[i][j]=Math.max(dp[i-1][j-1]+arr[i][j],dp[i-1][j]+arr[i][j])
        }

    }
}

console.log(Math.max(...dp[n-1]))