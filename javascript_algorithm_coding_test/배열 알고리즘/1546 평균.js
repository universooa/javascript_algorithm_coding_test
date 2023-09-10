let fs=require('fs')

let forBaekjoon=1
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputValue=fs.readFileSync(inputPath).toString().trim().split('\n')

let numOfScore=inputValue[0]*1



let arr= inputValue[1].split(' ').map(Number)
let maxValue= Math.max(...arr)

let sum=0
for(let i=0;i<numOfScore;i++){
    sum+=arr[i]/maxValue*100.0 //new calculated score
    // console.log(sum)
}
console.log(sum/numOfScore)