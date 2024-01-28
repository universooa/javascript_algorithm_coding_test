const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')
let [N,M]=input[0].split(' ').map(Number)
let arr=new Array(N).fill().map((v,i)=>i+1)

for(let i=1;i<=M;i++){
    let [from,to]=input[i].split(' ').map(Number)
    from-=1
    to-=1
    let second=arr.slice(from,to+1)

    second.reverse()
    arr.splice(from,to-from+1,...second)
}


console.log(arr.join(' '))