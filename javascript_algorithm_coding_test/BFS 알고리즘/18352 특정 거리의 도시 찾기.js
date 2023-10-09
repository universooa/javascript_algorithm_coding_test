fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Queue{
    constructor() {
        this.headIdx=0;
        this.tailIdx=0;
        this.items={}
    }
    enqueue(item){
        this.items[this.tailIdx]=item
        this.tailIdx++
    }
    dequeue(){
        let item=this.items[this.headIdx]
        delete this.items[this.headIdx]
        this.headIdx++
        return item
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }
}

let [N,M,K,X]=inputV[0].split(' ').map(Number)
let graph=Array.from(Array(N+1),()=>{
    return []
})
for(let i=1;i<=M;i++){
    let [start,end]=inputV[i].split(' ').map(Number)
    graph[start].push(end)
}

let queue=new Queue()
let ans=[]
let visited=new Array(N+1).fill(false)
queue.enqueue([X,0])
visited[X]=true

while(queue.getLength()!==0){
    let [val,dist]=queue.dequeue()
    if(dist===K){
        ans.push(val)
    }
    if(dist>K){
        continue
    }

    for(let node of graph[val]){
        if(visited[node]){
            //이미 방문한 노드라면 최단거리가 아닐 것이므로 skip
            continue
        }
        queue.enqueue([node,dist+1])
        visited[node]=true
    }
}

if(ans.length===0){
    console.log(-1)
}else{
    ans.sort((a,b)=>{
        return a-b
    })

    console.log(ans.join('\n'))
}
