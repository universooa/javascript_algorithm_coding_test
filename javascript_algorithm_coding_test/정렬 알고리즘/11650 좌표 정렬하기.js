let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let numOfInput=inputV[0]*1
let arr=[]
for(let i=1;i<=numOfInput;i++){
    [x,y]=inputV[i].split(' ').map(i=>parseInt(i))
    arr.push({x:x,y:y})
}

function compare(a,b){
    if(a.x!==b.x){
        return a.x-b.x
    }else{
        return a.y-b.y
    }
}
arr.sort(compare)

let answer=''
for(let j of arr){
    answer+=`${j.x} ${j.y}\n`
}

console.log(answer)