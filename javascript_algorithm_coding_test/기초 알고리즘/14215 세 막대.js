const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])
console.log(`${BigInt(N)*BigInt(N-1)*BigInt(N-2)/BigInt(6)}`)
console.log(3)