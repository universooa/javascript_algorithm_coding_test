let fs=require('fs')

let forBaekjoon=0
let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=forBaekjoon?remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let numOfInput=inputV[0]*1

let arr=inputV[1].split(' ').map(Number)
let sortedArr= Array.from(new Set(arr))

sortedArr.sort((a,b)=>{
    return a-b
})

let answer=''
let obj={}
for(let i=0;i<sortedArr.length;i++){
    obj[sortedArr[i]]=i
}
for(let j of arr){
    answer+=`${obj[j]} `
}

console.log(answer.trim())