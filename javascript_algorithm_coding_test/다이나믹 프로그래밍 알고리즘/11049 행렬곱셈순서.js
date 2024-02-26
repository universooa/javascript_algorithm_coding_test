fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let arr=[[]]
let dp=Array.from(Array(N+1),()=>{
    return new Array(N+1).fill(0)
})

for(let i=1;i<=N;i++){
    arr.push(input[i].split(' ').map(Number))
}

for(let k=1;k<N;k++){
    for(let i=1;i<=N-k;i++){
        let j=i+k
        dp[i][j]=1e9

        for(let mid=i;mid<j;mid++){
            // console.log(k,i,j,mid)
            dp[i][j]=Math.min(dp[i][j],dp[i][mid]+dp[mid+1][j]+arr[i][0]*arr[mid][1]*arr[j][1])
        }
    }
}

console.log(dp[1][N])