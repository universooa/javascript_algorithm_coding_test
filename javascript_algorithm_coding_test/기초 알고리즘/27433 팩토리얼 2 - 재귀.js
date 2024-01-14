const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input[0])

console.log(recursiveFunc(N))
function recursiveFunc(n){
    if(n<=1){
        return 1
    }
    return n*recursiveFunc(n-1)
}