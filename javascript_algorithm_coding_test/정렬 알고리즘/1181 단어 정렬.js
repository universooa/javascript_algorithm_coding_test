let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let numOfInput=inputV[0]*1

let arrSet=new Set()
for(let i=1;i<=numOfInput;i++){
    arrSet.add(inputV[i])
}

let arr=Array.from(arrSet)

function compare(a,b){
    if(a.length!==b.length){
        return a.length-b.length
    }else{
        if(a<b){
            return -1
        }else if(a>b){
            return 1
        }else{
            return 0
        }
    }
}
arr.sort(compare)

let answer=''

for(let j of arr){
    answer+=`${j}\n`
}

console.log(answer)