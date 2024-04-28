const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let n=Number(input[0])
let arr=input[1].split(' ').map(Number)
let x=Number(input[2])

let start=0
let end=n-1
let res=0

arr.sort((a,b)=>a-b)

for(let i=0;i<n;i++){
    if(start>=end){
        break
    }
    let val=arr[start]+arr[end]
    if(val===x){
        res++
        end--
    }else if(val<x){
        start++
    }else{
        end--
    }

}

console.log(res)
