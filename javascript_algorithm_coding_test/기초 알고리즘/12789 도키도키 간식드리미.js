const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').replaceAll('\r','').trim().split('\n')

let N=Number(input[0])
let waitingLine=[]
let arr=input[1].split(' ').map(Number)
let cnt=1
for(let i of arr){
    waitingLine.push(i)

    while(waitingLine.length!==0){
        if(waitingLine[waitingLine.length-1]===cnt){
            waitingLine.pop()
            cnt++
        }else{
            break
        }
    }

}

if(waitingLine.length===0){
    console.log("Nice")
}else{
    console.log("Sad")
}