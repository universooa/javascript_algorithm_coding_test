const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input[0])
let graph=Array.from(Array(N),()=>new Array(N))
let resultGraph=Array.from(Array(N),()=>new Array(N).fill(0))

for(let i=1;i<=N;i++){
    let str=input[i]
    for(let j=0;j<N;j++){
        if(str[j]==='N'){
            graph[i-1][j]=0
        }else{
            graph[i-1][j]=1
        }
    }
}

let result=0
for(let k=0;k<N;k++){
    let fr=0
    for(let a=0;a<N;a++){
        for(let b=0;b<N;b++){
            if(a===b){
                graph[a][b]=0
            }else{
                if((graph[a][k]&&graph[k][b])||graph[a][b]){
                    resultGraph[a][b]=1
                }
            }
        }
    }
}

let val=0
for(let i=0;i<N;i++){
    let sumV=resultGraph[i].reduce((a,c)=>a+c,0)
    val=Math.max(val,sumV)
}

console.log(val)