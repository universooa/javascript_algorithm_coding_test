const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let [N,S]=input[0].split(' ').map(Number)
let arr=input[1].split(' ').map(Number)
let total=0
let minLen=1e9

for(let start=0,end=0;start<N;start++){
    while(end<N){
        let curVal=total+arr[end]
        if(curVal<S){
            total+=arr[end]
            end++
        }else{
            minLen=Math.min(minLen,end-start+1)
            break
        }

    }
    total-=arr[start]
}

if(minLen!==1e9){
    console.log(minLen)
}else{
    console.log(0)
}