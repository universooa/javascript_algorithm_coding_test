fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

let N=Number(inputV[0])
let d=new Array(N+1)
d[0]=0
d[1]=1
d[2]=2
for(let i=3;i<=N;i++){
    d[i]=(d[i-2]+d[i-1])%15746
}
console.log(d[N])