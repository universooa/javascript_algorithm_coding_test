const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

let N=Number(input[0])
let M=Number(input[1])
let INF=1e17
let graph= Array.from(new Array(N+1),()=>new Array(N+1).fill(INF))

for(let i=2;i<M+2;i++){
    let [u,v,w]=input[i].split(' ').map(Number)
    graph[u][v]=Math.min(graph[u][v],w)
}



for(let k=1;k<=N;k++){
    for(let a=1;a<=N;a++){
        for(let b=1;b<=N;b++){
            //k를 거쳐서 가는 것이 짧을까 아니면 a->b 다이렉트로 가는게 짧을까
            if(a===b){
                graph[a][b]=0
            }else{
                let cost=graph[a][k]+graph[k][b]
                graph[a][b]=Math.min(graph[a][b],cost)
            }
        }
    }
}

let res=''
for(let i=1;i<=N;i++){
    for(let j=1;j<=N;j++){
        if(graph[i][j]===INF){
            res+='0'
        }else{
            res+=`${graph[i][j]}`
        }
        if(j!==N){
            res+=' '
        }
    }
    res+='\n'
}

console.log(res)