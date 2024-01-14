const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let [N,M]=input[0].split(' ').map(Number)
let arr=input[1].split(' ').map(Number)
let resArr=[0]
let total=0
for(let i of arr){
    total+=i
    resArr.push(total)
}

let res=''
for(let i=2;i<2+M;i++){
    let [start,end]=input[i].split(' ').map(Number)
    res+=`${resArr[end]-resArr[start-1]}\n`
}

console.log(res)