const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input)
let recurSum=0
let dynamicSum=0
function recursiveFunc(n){

    if(n==1||n==2){
        recurSum++
        return 1
    }
    return recursiveFunc(n-1)+recursiveFunc(n-2)
}

let arr=new Array(N+1).fill(0)
function dynamicFunc(n){
    arr[1]=1
    arr[2]=2
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-2]+arr[i-1]
        dynamicSum++
    }
    return arr[n]
}

recursiveFunc(N)
dynamicFunc(N)

console.log(recurSum,dynamicSum)