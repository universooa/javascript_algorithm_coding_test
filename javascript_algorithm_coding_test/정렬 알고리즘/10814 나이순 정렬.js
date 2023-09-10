let fs=require('fs')

// let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let numOfInput=inputV[0]*1

let arr=[]

for(let i=1;i<=numOfInput;i++){
    let temp=inputV[i].split(' ')
    arr.push({age:temp[0],name:temp[1]})
}

function compare(a,b){
    if(a.age!==b.age){
        return a.age-b.age
    }
}

arr.sort(compare)

let answer=''

for(let j of arr){
    answer+=`${j.age} ${j.name}\n`
}

console.log(answer)