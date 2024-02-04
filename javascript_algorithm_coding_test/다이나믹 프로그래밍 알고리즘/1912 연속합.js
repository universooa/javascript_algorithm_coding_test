fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(input[0])
let steps=[]
for(let i=1;i<=N;i++){
    steps.push(Number(input[i]))
}

let dp=new Array(N).fill(10001)
dp[0]=steps[0] //첫번째 계단을 갈 수있는 최대값은 1개
dp[1]=steps[0]+steps[1] // 두번째 계단을 갈 수 있는 최댓값은 첫번째 계단도 밟고 두번째 계단도 밟는것
dp[2]=Math.max(steps[0]+steps[2],steps[1]+steps[2])
//세번째 계단을 갈 수 있는 최댓값은 한칸+두칸 또는 두칸+한칸

for(let i=3;i<N;i++){
    dp[i]=Math.max(steps[i]+dp[i-2],steps[i]+steps[i-1]+dp[i-3])
}

console.log(dp[N-1])