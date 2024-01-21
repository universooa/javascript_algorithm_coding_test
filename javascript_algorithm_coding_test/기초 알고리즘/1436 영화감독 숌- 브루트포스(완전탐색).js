const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().replaceAll('\r','').split('\n')

let N=Number(input)

let arr=[]
let value='666'
while(arr.length<N){
    let cnt=0
    for(let i of value){ //문자열로 만들어서 연속 6이 3개인지 봄.
        if(i==='6'){
            cnt++
        }else{
            cnt=0
        }
        if(cnt>=3){
            arr.push(value)
            break
        }
    }

    value=(Number(value)+1).toString()
}

console.log(arr[N-1])