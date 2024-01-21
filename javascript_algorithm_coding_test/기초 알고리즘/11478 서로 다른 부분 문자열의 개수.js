const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let arr=input[0]
let size=arr.length
let set=new Set()
for(let i=0;i<size;i++){
    for(let j=i+1;j<=size;j++){
        let tmp=arr.slice(i,j)
        set.add(tmp)
    }

}

console.log(set.size)