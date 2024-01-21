const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arrA=[]
let arrB=[]

for(let i=1;i<1+N;i++){
    arrA.push(input[i].split(' ').map(Number))
}

for(let i=1+N;i<=N+N;i++){
    arrB.push(input[i].split(' ').map(Number))
}

let result=''
for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        result+=`${arrA[i][j]+arrB[i][j]} `
    }
    result+='\n'
}

console.log(result)