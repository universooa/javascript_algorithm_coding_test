fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')


class Queue{
    constructor() {
        this.headIdx=0;
        this.tailIdx=0;
        this.arr={}
    }
    enqueue(value){
        this.arr[this.tailIdx]=value
        this.tailIdx++
    }
    dequeue(){
        let val=this.arr[this.headIdx]
        delete this.arr[this.headIdx]
        this.headIdx++
        return val
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }
}




let [N,K,M]=inputV[0].split(' ').map(Number)
let graph=[]
for(let gr=1;gr<N+M+1;gr++){
    graph[gr]=[]
}
// let graph=Array.from(Array(N+M+1),()=>{
//     return []
// })


for(let i=1;i<inputV.length;i++){
    let hyperTube=inputV[i].split(' ').map(Number)
    for(let ks=0;ks<K;ks++){
        graph[hyperTube[ks]].push(N+i) //역과 하이퍼튜브 양방향으로 연결
        graph[N+i].push(hyperTube[ks])
    }

}

// console.log(graph)

let visited=new Set()

let queue=new Queue()
queue.enqueue([1,1])
visited[1]=true
let result=1e6
while(queue.getLength()!==0){
    let [val,cnt]=queue.dequeue()

    if(val===N){
        if(result>cnt){
            result=cnt
        }
        break
    }
    for(let j=0;j<graph[val].length;j++){
        let newVal=graph[val][j]
        if(visited[newVal]){
            continue
        }
        queue.enqueue([newVal,cnt+1])
        visited[newVal]=true
    }
}

if(result!==1e6){
    console.log(Math.floor(result/2)+1)
}else{
    console.log(-1)
}