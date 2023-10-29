fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Queue{
    constructor() {
        this.headIdx=0;
        this.tailIdx=0;
        this.items={}
    }
    enqueue(value){
        this.items[this.tailIdx]=value
        this.tailIdx++
    }
    dequeue(){
        let val=this.items[this.headIdx]
        delete this.items[this.headIdx]
        this.headIdx++
        return val
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }
}


let n=Number(inputV[0])
let m=Number(inputV[1])
let graph=[[]]
for(let j=1;j<=n;j++){
    graph[j]=[]
}

for(let i=2;i<2+m;i++){
    let [a,b]= inputV[i].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
}

let visited=new Set()
queue=new Queue()
queue.enqueue([1,0])
visited.add(1)
let result=0
while(queue.getLength()!==0){
    let [val,cnt]=queue.dequeue()
    if(cnt<=2){
        result++
    }
    else{
        break
    }
    for(let c of graph[val]){
        if(visited.has(c)){
            continue
        }
        queue.enqueue([c,cnt+1])
        visited.add(c)
    }
}

console.log(result-1) //나 자신 빼기
