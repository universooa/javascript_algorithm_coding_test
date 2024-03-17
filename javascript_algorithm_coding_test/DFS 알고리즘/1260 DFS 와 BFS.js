const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local
let input=fs.readFileSync(inputPath,'utf-8').trim().replaceAll('\r','').split('\n')

class Queue{
    constructor(){
        this.arr={}
        this.start=1
        this.end=1
    }
    getLength(){
        return this.end-this.start
    }
    enqueue(x){
        this.arr[this.end++]=x
    }
    dequeue(){
        if(this.getLength()===0){
            return
        }
        let value=this.arr[this.start]
        delete this.arr[this.start++]

        return value
    }
}


let [N,M,V]=input[0].split(' ').map(Number)
let graph=new Array(N+1).fill(0).map(()=>{
    return new Array()
})

let visited=new Array(N+1).fill(false)


for(let i=1;i<=M;i++){
    let [from,to]=input[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
}

graph.map((v)=>{
    return v.sort((a,b)=>{
        return a-b
    })
})


let answer=''
result=[]
dfs(V)
answer+=result.join(' ')+"\n"

result=[]
queue=new Queue()
bfs(V)
answer+=result.join(' ')

console.log(answer)

function dfs(V){

    visited[V]=true
    result.push(V)

    for(let i=0;i<graph[V].length;i++){
        let e=graph[V][i]
        if(!visited[e]){
            dfs(e)
        }
    }
}

function bfs(V){

    let visited=new Array(N+1).fill(false)
    queue.enqueue(V)
    visited[V]=true
    result.push(V)

    while(queue.getLength()!==0){
        let e=queue.dequeue()
        for(let i=0;i<graph[e].length;i++){
            let ev=graph[e][i]

            if(!visited[ev]){
                visited[ev]=true
                result.push(ev)
                queue.enqueue(ev)
            }
        }
    }

}
