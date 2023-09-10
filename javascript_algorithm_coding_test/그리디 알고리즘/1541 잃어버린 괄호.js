let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

let inputV=fs.readFileSync(inputPath).toString().trim()

let arr=inputV.split('-')

let sum=0

for(let i=0;i< arr.length;i++){
    let temp=arr[i].split('+').map(Number).reduce((acc,cur)=>{
        return acc+cur
    },0) // + 없으면 그냥 split 안 되고 무시됨..

    if(i===0){
        sum=temp
    }else{
        sum-=temp
    }
}

console.log(sum)