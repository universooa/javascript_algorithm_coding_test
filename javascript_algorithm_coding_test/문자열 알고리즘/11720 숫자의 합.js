let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

const inputValue=fs.readFileSync(inputPath).toString().trim().split('\n')

const lengthOfNum=inputValue[0]*1

let sum=0

for(let i=0;i<lengthOfNum;i++){
    sum+= +inputValue[1][i]
}

console.log(sum)