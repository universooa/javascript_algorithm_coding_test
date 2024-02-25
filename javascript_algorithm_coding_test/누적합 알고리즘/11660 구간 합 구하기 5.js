const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

let [N,M]=input[0].split(' ').map(Number)

let arr=[new Array(N+1).fill(0)] //0으로 둘러싸줌
let sumArr=Array.from(Array(N+1),()=>{
    return new Array(N+1).fill(0)
})

for(let i=1;i<=N;i++){
    let tmpArr=[0]
    let tmp=input[i].split(' ').map(Number)
    for(let j=0;j<N;j++){
        tmpArr.push(tmp[j])
    }
    arr.push(tmpArr)
}

for(let i=1;i<=N;i++){
    for(let j=1;j<=N;j++){
        sumArr[i][j]=sumArr[i-1][j]+sumArr[i][j-1]-sumArr[i-1][j-1]+arr[i][j]
    }
}

let result=''
for(let i=N+1;i<input.length;i++){
    let [x1,y1,x2,y2]=input[i].split(' ').map(Number)

    result+=`${sumArr[x2][y2]-sumArr[x1-1][y2]-sumArr[x2][y1-1]+sumArr[x1-1][y1-1]}\n`
}

console.log(result)