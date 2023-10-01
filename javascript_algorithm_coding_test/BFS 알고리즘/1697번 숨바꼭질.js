fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

let [n,k]=inputV[0].split(' ').map(Number)

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

visited=Array(1e5+1).fill(false);

bfs(n,visited,0)
function bfs(start,visited,depth){
    queue=new Queue();
    queue.enqueue([start,depth]);
    //현재 노드를 방문 처리
    visited[start]=true;

    while(queue.getLength()!==0){
        [v,dpth]=queue.dequeue();
        if(v===k){
            console.log(dpth)
            return;
        }
        depth+=1
        // console.log(v,dpth);
        let res=[]
        res.push(v-1)
        res.push(v+1)
        res.push(v*2)
        for(i of res){
            if(i>100000||i<0){
                continue
            }
            if(!visited[i]){
                queue.enqueue([i,dpth+1]);
                visited[i]=true;
            }
        }
    }

}