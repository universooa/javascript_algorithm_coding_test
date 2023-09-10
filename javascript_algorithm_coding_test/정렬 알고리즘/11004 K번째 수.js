let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

// let numOfInput=inputV[0][0]*1
let targetK=inputV[0].split(' ')[1]*1

let arr=inputV[1].split(' ').map(Number)
arr.sort((a,b)=>{
    if(a<b){
        return -1
    }else if(a>b){
        return 1
    }else{
        return 0
    }
})

console.log(arr[targetK-1])