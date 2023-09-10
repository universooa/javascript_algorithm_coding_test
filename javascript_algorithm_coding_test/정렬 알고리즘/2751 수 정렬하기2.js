let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let numOfInput=inputV[0]*1
let arr=[]
for(let i=1;i<=numOfInput;i++){
    arr.push(parseInt(inputV[i]))
}

arr.sort((a,b)=>{
    if(a<b){
        return -1
    }else if (a>b){
        return 1
    }else{
        return 0
    }
})

let answer=''

for(let j of arr){
    answer+=`${j}\n`
}

console.log(answer)