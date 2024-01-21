const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let result=''

for(let i=1;i<=N;i++){
    let value=Number(input[i])
    let q=0,d=0,n=0,p=0

    q=Math.floor(value/25)
    value%=25

    d=Math.floor(value/10)
    value%=10

    n=Math.floor(value/5)
    value%=5

    p=Math.floor(value)
    value-=p

    result+=`${q} ${d} ${n} ${p}\n`
}


console.log(result)