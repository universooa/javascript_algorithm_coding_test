fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let tc=Number(input[0])
let result=''

for(let i=1;i<input.length;i+=2){
    let N=Number(input[i])
    let arr=input[i+1].split(' ').map(Number)
    let sumArr=[0]
    arr.reduce((a,c)=>{
        sumArr.push(a+c)
        return a+c
    },0)


    let dp=Array.from(Array(N+1),()=>{
        return new Array(N+1).fill(0)
    })


    for(let k=1;k<N;k++){
        for(let i=1;i<=N-k;i++){
            let j=i+k
            dp[i][j]=1e9
            for(let mid=i;mid<j;mid++){
                dp[i][j]=Math.min(dp[i][j],dp[i][mid]+dp[mid+1][j]+sumArr[j]-sumArr[i-1])
            }
        }
    }

    result+=`${dp[1][N]}\n`

}

console.log(result)