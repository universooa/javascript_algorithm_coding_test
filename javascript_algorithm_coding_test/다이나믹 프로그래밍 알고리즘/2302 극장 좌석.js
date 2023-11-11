fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(inputV[0])
let M=Number(inputV[1])
let vipList=[]

let dp=new Array(41).fill(-1)
dp[0]=1
dp[1]=1
function fibo(i){

    if(dp[i]!==-1){
        return dp[i]
    }
    dp[i]=fibo(i-1)+fibo(i-2)
    return dp[i]
}


let resultList=[]
let start=1
for(let i=2;i<2+M;i++){
    let end=Number(inputV[i])
    resultList.push(end-start) //vip 제외한 사람들 수
    start=end+1
}

resultList.push(N+1-start) //vip 제외한 사람들 수

let result=1
for(let j of resultList){
    result*=fibo(j)
}

console.log(result)