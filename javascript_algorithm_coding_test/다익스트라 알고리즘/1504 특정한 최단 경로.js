fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class MinHeap{
    constructor(comparator) {
        this.comparator=comparator||this.defaultComparator
        this.heap=[]
    }
    defaultComparator(a,b){
        if(typeof a==='number' && b==='number'){
            return a-b
        }else{
            a=a.toString()
            b=b.toString()

            if(a==b){
                return 0
            }

            return a>b?1:-1
        }
    }
    size(){
        return this.heap.length
    }
    isEmpty(){
        return this.size()===0
    }
    compare(a,b){
        return this.comparator(this.heap[a],this.heap[b])
    }
    swap(a,b){
        [this.heap[a],this.heap[b]]=[this.heap[b],this.heap[a]]
    }
    enq(val){
        let size=this.heap.push(val)
        let cur=size-1

        while(cur>0){
            let parent=Math.floor((cur-1)/2)

            if(this.compare(parent,cur)>0){ //cur이 parent보다 작으면 위치 바꿈
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
        }

        this.heap[0]=last

        let cur=0
        let compareChild=cur

        while(cur<size){
            let leftChild=cur*2
            let rightChild=cur*2+1

            if(leftChild<size && this.compare(compareChild,leftChild)>0){ //왼쪽 자식이 더 작은경우
                compareChild=leftChild
            }
            if(rightChild<size && this.compare(compareChild,rightChild)>0){//오른쪽 자식이 더 작은경우
                compareChild=rightChild
            }

            if(compareChild===cur){
                break // cur이 제일 작으면 밑으로 내려갈 필요 없음
            }

            this.swap(compareChild,cur)

            cur=compareChild


        }


        return first
    }

}


let [N,E]=input[0].split(' ').map(Number)
let graph=Array.from(new Array(N+1),()=>new Array())



let i=1
for (i=1;i<=E;i++){
    let [a,b,c]=input[i].split(' ').map(Number)
    graph[a].push([c,b])//간선비용,노드 순으로 저장
    graph[b].push([c,a])
}

let [v1,v2]=input[i].split(' ').map(Number)
let INF=1e17
let distance=new Array(N+1).fill(INF)

function dijkstra(start){
    distance=new Array(N+1).fill(INF)
    let heap=new MinHeap((a,b)=> a[0]-b[0]) //최소힙

    heap.enq([0,start])
    distance[start]=0

    while(!heap.isEmpty()){
        let [dist,now]=heap.deq()
        if(distance[now]<dist){
            continue
        }
        for(let [w,node ] of graph[now]){
            if(dist+w<distance[node]){
                distance[node]=dist+w
                heap.enq([dist+w,node])
            }
        }
    }

}

dijkstra(1)
let start_1_to_v1=distance[v1]
let start_1_to_v2=distance[v2]

dijkstra(v1)
let start_v1_to_v2=distance[v2]
let start_v1_to_n=distance[N]

dijkstra(v2)
let start_v2_to_v1=distance[v1]
let start_v2_to_n=distance[N]

let start_1_v1_v2_n=start_1_to_v1+start_v1_to_v2+start_v2_to_n
let start_1_v2_v1_n=start_1_to_v2+start_v2_to_v1+start_v1_to_n

let result=Math.min(start_1_v1_v2_n,start_1_v2_v1_n)

if(result>=INF){
    console.log(-1)
}else{
    console.log(result)
}


