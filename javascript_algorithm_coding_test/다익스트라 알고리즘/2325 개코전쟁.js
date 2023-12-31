fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Queue{
    constructor() {
        this.arr={}
        this.start=0
        this.end=0
    }
    enq(val){
        this.arr[this.end]=val
        this.end++
    }
    deq(val){
        let ret=this.arr[this.start]
        delete this.arr[this.start]
        this.start++
        return ret
    }
    size(){
        return this.end-this.start
    }
}

class MinHeap{
    constructor(comparator) {
        this.comparator=comparator||this.defaultComparator
        this.heap=[]
    }
    size(){
        return this.heap.length
    }
    isEmpty(){
        return this.size()===0
    }
    defaultComparator(a,b){
        if(typeof a==='number' && typeof b==='number'){
            return a-b
        }else{
            let a=a.toString()
            let b=b.toString()

            if(a==b){
                return 0
            }
            return a>b?1:-1
        }
    }
    compare(a,b){
        return this.comparator(this.heap[a],this.heap[b])
    }
    swap(a,b){
        [this.heap[a],this.heap[b]]=[this.heap[b],this.heap[a]]
    }
    enq(val){
        let cur=this.heap.push(val)-1

        while(cur>0){
            let parent=Math.floor((cur-1)/2)

            if(this.compare(parent,cur)>0){
                this.swap(parent,cur)
                cur=parent

            }else{
                break
            }

        }
    }
    peek(){
        return this.heap[0]
    }
    deq(){
        let first=this.peek()
        let last=this.heap.pop()
        let size=this.size()

        if(size===0){
            return first
        }else{
            this.heap[0]=last
            let cur=0

            while(cur<size){
                let compare=cur
                let left=cur*2
                let right=cur*2+1
                if(left<size && this.compare(left,compare)<=0){ //compare보다 left가 작으면 compare에 left 넣음
                    compare=left
                }
                if(right<size && this.compare(right,compare)<=0){//compare보다 right가 작으면 compare에 right넣음
                    compare=right
                }

                if(compare===cur){ //left,right보다 cur가 제일 작으면 밑으로 내려가는 거 멈춤
                    break
                }
                this.swap(compare,cur)
                cur=compare
            }

        }

        return first
    }
}

let [n,m]=input[0].split(' ').map(Number)
let graph=Array.from(new Array(n+1),()=>new Array())
for(let i=1;i<=m;i++){
    [x,y,z]= input[i].split(' ').map(Number)
    graph[x].push([z,y]) // [가중치,노드] 넣음
    graph[y].push([z,x])
}


let INF=1e17

let distance=new Array(n+1).fill(INF)

function dijkstra(a,b){
    let heap=new MinHeap((a,b)=>{
        return a[0]-b[0]
    })


    heap.enq([0,1])
    distance[1]=0

    while(heap.size()!==0){
        let [dist,now]=heap.deq()

        if(distance[now]<dist){
            continue
        }
        for(let i=0;i<graph[now].length;i++){
            let [w,node]=graph[now][i]

            if(now===a&&node===b){
                continue
            }
            else if(now===b&&node===a){
                continue
            }

            if(distance[node]>dist+w){
                distance[node]=dist+w
                heap.enq([dist+w,node])
            }
        }

    }


}

function bfs(start){
    let queue=new Queue()
    let set=new Set()
    let removes=[]
    queue.enq(n)
    set.add(n)

    while(queue.size()!==0){
        let now=queue.deq()

        if(now===start){
            continue
        }

        for(let i=0;i<graph[now].length;i++){
            let [w,node]=graph[now][i]
            if(distance[now]===distance[node]+w){ //최단거리에 포함되는 간선임
                removes.push([now,node])
                if(set.has(node)){
                    continue
                }
                queue.enq(node)
                set.add(node)

            }

        }

    }
    return removes
}


dijkstra(-1,-1)

let removes=bfs(1)
let result=0
for([a,b] of removes){
    distance=new Array(n+1).fill(INF)
    dijkstra(a,b)
    result=Math.max(result,distance[n])

}


console.log(result)