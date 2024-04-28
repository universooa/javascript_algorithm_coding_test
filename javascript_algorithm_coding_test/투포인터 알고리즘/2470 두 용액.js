const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let N=Number(input[0])
let arr=input[1].split(' ').map(Number)

arr.sort((a,b)=>a-b)

let start=0
let end=N-1
let res=[1e12,start,end]

while(start<end){

    let val=arr[start]+arr[end]
    if(Math.abs(val)<res[0]){
        res[0]=Math.abs(val)
        res[1]=start
        res[2]=end

        if(val===0){
            break
        }
    }

    if(val<0){
        start++
    }else{
        end--
    }



}

console.log(arr[res[1]]+" "+arr[res[2]])
