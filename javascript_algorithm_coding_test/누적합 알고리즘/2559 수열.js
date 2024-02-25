const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let [N,K]=input[0].split(' ').map(Number)
let arr=input[1].split(' ').map(Number)
let sumArr=[0]

let total=0
for(let i=0;i<arr.length;i++){
    total+=arr[i]
    sumArr.push(total) //누적합 구하기
}

let start=1
let end=start+K-1

let result=-1e8

for(let i=start;i+K-1<=N;i++){
    end=i+K-1

    result=Math.max(result,sumArr[end]-sumArr[i-1])
}


console.log(result)