const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')
let [N,M]=input[0].split(' ').map(Number)

let arr=Array.from(Array(N+1),()=>new Array(M+1).fill(0))
let sumArr=Array.from(Array(N+1),()=>new Array(M+1).fill(0))

for(let i=1;i<N+1;i++){
    let col=input[i].split(' ').map(Number)
    for(let j=0;j<M;j++){
        arr[i][j+1]=col[j]
    }
}

let nxt=N+1
let K=Number(input[nxt])



//누적합 구하기
for(let i=1;i<=N;i++){
    for(let j=1;j<=M;j++){
        sumArr[i][j]=sumArr[i-1][j]+sumArr[i][j-1]-sumArr[i-1][j-1]+arr[i][j]
    }
}

let res=''
for(let w=nxt+1;w<=nxt+K;w++){
    let [i,j,x,y]=input[w].split(' ').map(Number)

    let partSum=sumArr[x][y]-sumArr[i-1][y]-sumArr[x][j-1]+sumArr[i-1][j-1]
    res+=`${partSum}\n`
}

console.log(res)