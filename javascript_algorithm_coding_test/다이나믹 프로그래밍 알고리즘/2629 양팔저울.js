fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

let w_max_range=400001
let W=Number(input[0])
let weights=input[1].split(' ').map(Number)

let M=Number(input[2])
let marbles=input[3].split(' ').map(Number)
let dp=Array.from(Array(W+1),()=>{
    return new Array(w_max_range).fill(false)
})

dp[0][0]=true

for(let i=1;i<=W;i++){
    for(let j=0;j<15001;j++){
        dp[i][j]=dp[i-1][j]||dp[i-1][Math.abs(j-weights[i-1])]||dp[i-1][j+weights[i-1]]
    }
}

let result=[]
for(let i=0;i<M;i++){
    if(dp[W][marbles[i]]){
        result.push('Y')
    }else{
        result.push('N')
    }
}

console.log(result.join(' '))