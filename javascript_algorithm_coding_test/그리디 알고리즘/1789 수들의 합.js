let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let target= parseInt(fs.readFileSync(inputPath).toString())

let sum=0
let cnt=0
while (sum<=target){
    cnt+=1
    sum+=cnt
}


console.log(cnt-1)