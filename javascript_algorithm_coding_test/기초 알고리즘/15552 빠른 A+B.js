let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().split('\n')

let answer="";
for(let i=1;i<=inputValue[0];i++){
    [a,b]=inputValue[i].split(' ').map(Number)
    answer+=`${a+b}\n`
}

console.log(answer)