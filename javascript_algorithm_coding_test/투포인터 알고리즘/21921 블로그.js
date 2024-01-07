const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let [N,X]=input[0].split(' ').map(Number)
//총 N일, X일 중에 가장 많이 방문한 수 ?
let arr=[0,...input[1].split(' ').map(Number)]

//슬라이딩 윈도우
let maxSum=0
let sumArr=new Array(N+1).fill(0)
for(let i=1;i<=N;i++){
    sumArr[i]=sumArr[i-1]+arr[i]
}

let left=1
let right=X
let period=0
while(true){
    if(right>N){
        break
    }

    let sum=sumArr[right]-sumArr[left-1]


    if(sum===maxSum){
        period++
    }
    else if(sum>maxSum){
        maxSum=sum
        period=1
    }
    left++
    right++

}

if(maxSum===0){
    console.log('SAD')
}else{
    console.log(maxSum)
    console.log(period)
}