const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input[0])
let arr=input[1].split(' ').map(Number)
let M=Number(input[2])

let sumArr=[0]
let sum=0
for(let i=0;i<N;i++){
    sum+=arr[i]
    sumArr.push(sum)
}

let result=''

for(let j=3;j<3+M;j++){
    let [left,right]=input[j].split(' ').map(Number)
    result+= `${sumArr[right]-sumArr[left-1]}\n`
}

console.log(result)