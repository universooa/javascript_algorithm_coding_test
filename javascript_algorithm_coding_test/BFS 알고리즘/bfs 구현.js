fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

class Queue{
    constructor() {
        this.items={};
        this.headIndex=0;
        this.tailIndex=0;
    }
    enqueue(item){
        this.items[this.tailIndex]=item;
        this.tailIndex++;
    }
    dequeue(){
        const item=this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    peek(){
        return this.items[this.headIndex];
    }
    getLength(){
        return this.tailIndex-this.headIndex;
    }
}

queue=new Queue();

queue.enqueue(5)
queue.enqueue(3)
queue.dequeue()


graph=[
    [],
    [2,3,4],
    [1],
    [1,5,6],
    [1,7],
    [3,8],
    [3],
    [4],
    [5]
]

visited=Array(9).fill(false);

bfs(graph,1,visited)
function bfs(graph,start,visited){
    queue=new Queue();
    queue.enqueue(start);
    //현재 노드를 방문 처리
    visited[start]=true;

    while(queue.getLength()!=0){
        v=queue.dequeue();
        console.log(v);
        for(i of graph[v]){
            if(!visited[i]){
                queue.enqueue(i);
                visited[i]=true;
            }
        }
    }

}