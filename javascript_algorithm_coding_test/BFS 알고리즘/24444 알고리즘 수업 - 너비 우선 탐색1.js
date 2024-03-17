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
    enqueue(x){
        this.arr[this.end++]=x
    }
    dequeue(){
        if(this.getLength()===0){
            return
        }
        let value=this.arr[this.start++]
        return value
    }
    getLength(){
        return this.end-this.start
    }
}


let [N,M,R]=input[0].split(' ').map(Number)

let graph=new Array(N+1).fill(0).map(()=>{
    return new Array()
})



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

let queue=new Queue()
cnt=1
let visited=bfs(graph,graph[R],R)

let result=''
for(let i=1;i<=N;i++){
    result+=`${visited[i]}\n`
}

console.log(result)

function bfs(V,E,R){
    let visited=new Array(N+1).fill(0)
    visited[R]=cnt++
    queue.enqueue(R)

    while(queue.getLength()!==0){
        let v=queue.dequeue()
        for(let i=0;i<V[v].length;i++){
            let e=graph[v][i]
            if(!visited[e]){
                visited[e]=cnt++
                queue.enqueue(e)
            }
        }
    }

    return visited
}
