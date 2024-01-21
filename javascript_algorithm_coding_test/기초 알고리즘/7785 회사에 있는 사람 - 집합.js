const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])
let set=new Set()
for(let i=1;i<=N;i++){
    let [name,status]=input[i].split(' ')
    if(set.has(name)){
        set.delete(name)
    }else{
        set.add(name)
    }
}

let arr=Array.from(set)
arr.sort((a,b)=>a<b?1:-1)
console.log(arr.join('\n'))