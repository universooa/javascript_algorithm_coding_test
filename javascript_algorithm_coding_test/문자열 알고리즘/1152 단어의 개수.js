let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split(' ')


inputV=inputV.filter((val)=>{
    return val!==''
})

let answer=inputV.length

console.log(answer)