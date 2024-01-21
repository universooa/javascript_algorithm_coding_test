const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let value=Number(input[0])
let result=1e9
for(let i=value;i>1;i--){
    let tmp=i
    let tmpStr=i.toString()
    for(let j of tmpStr){
        tmp+=Number(j)
    }
    if(tmp===value){
        result=Math.min(result,i)
    }

}

if(result===1e9){
    console.log(0)
}else{
    console.log(result)
}