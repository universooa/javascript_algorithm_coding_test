let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().trim().split('\n').map(Number)


let divider=42
let arrSet=new Set()

for(let i=0;i<inputValue.length;i++){
    arrSet.add(inputValue[i]%divider)
}

// console.log(arrSet)
console.log(arrSet.size)