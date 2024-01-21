const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let [N,K]=input[0].split(' ').map(Number)
let arr=new Array(N).fill(-1).map((v,i)=>{
    return i+1
})


let result=[]

let rear=0
while(arr.length!==0){
    rear=(rear+K-1)% arr.length
    // N으로 나누면 안 된다 -> 빠진 배열 원소 개수만큼 나눈다
    result.push(arr[rear])
    arr.splice(rear,1)

}

console.log("<"+result.join(", ")+">")