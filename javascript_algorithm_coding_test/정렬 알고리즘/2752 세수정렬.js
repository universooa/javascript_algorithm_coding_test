let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split(' ').map(Number)

inputV.sort((a,b)=>{
    if(a<b){
        return -1
    }else if(a>b){
        return 1
    }else{
        return 0
    }
})

let answer=''
for(let i of inputV){
    answer+=`${i} `
}

console.log(answer.trim())