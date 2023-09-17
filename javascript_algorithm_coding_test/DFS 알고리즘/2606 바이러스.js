let fs=require('fs')

let local='testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let n=inputV[0]*1
let connectedTotal=inputV[1]*1
let graph=Array.from(Array(n+1),()=>new Array())
// console.log(graph)

for(let i=2;i<connectedTotal+2;i++){
    let [start,end]=inputV[i].split(' ').map(Number)
    graph[start].push(end)
    graph[end].push(start) //양방향
}
// console.log(graph)
let visited=new Array(n+1).fill(false)
let cnt=0
visited[1]=true


function dfs(start){
    for(let i=0;i<graph[start].length;i++){
        let item=graph[start][i]
        if(visited[item]){
            continue;
        }
        visited[item] = true
        cnt+=1
        dfs(item)
    }
}
dfs(1)
console.log(cnt)