const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')
let [N,M]=input[0].split(' ').map(Number)

let A=input[1].split(' ').map(Number)
let B=input[2].split(' ').map(Number)
let result=new Array(N+M).fill(-1)

let left=0
let right=0
let resultIdx=0

while(true){
    if(left>=N){
        for(let i=right;i<M;i++,resultIdx++){
            result[resultIdx]=B[i]
        }
        break
    }
    else if(right>=M){
        for(let i=left;i<N;i++,resultIdx++){
            result[resultIdx]=A[i]
        }
        break
    }
    if(A[left]<B[right]){
        result[resultIdx]=A[left]
        left++
    }else{
        result[resultIdx]=B[right]
        right++
    }
    resultIdx++
}

let res=result.join(' ')

res=res.trimEnd()
console.log(res)