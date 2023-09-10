let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().trim().split('\n')

let n= inputV[0]*1

let arr=inputV[1].split(' ').map(Number)

arr.sort((a,b)=>{ //기본은 유니코드 정렬임.
    return a-b
})


let sum=0
let answer=0
for (let i of arr){
    sum=sum+i
    answer+=sum
}

console.log(answer)