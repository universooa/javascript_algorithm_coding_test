let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

const inputValue=fs.readFileSync(inputPath).toString().trim().split('\n')

const lengthOfNum=inputValue[0]*1
let answer=''
for(let i=1;i<=lengthOfNum;i++){
    let arr=inputValue[i].split(' ')
    let lengthOfChar=arr.shift()
    arr=arr[0].split('')
    for(let j of arr){
        for(let k=0;k<lengthOfChar;k++){
            answer+=`${j}`
        }
    }
    answer+='\n'
}

console.log(answer)