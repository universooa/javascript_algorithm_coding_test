const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])

let result=[]
let answer=''
for(let i=1;i<=N;i++){
    result.push(' '.repeat(N-i)+'*'.repeat(2*i-1))
}
let back=[...result]
back.reverse()
back.shift()

console.log(result.concat(back).join('\n'))