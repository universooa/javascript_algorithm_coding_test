const fs=require('fs')
let local='./testcase.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

//다익스트라를 만들려면 최소힙부터 만들어야한다.
//comparator 도 구현해야 한다.



class MinHeap{
    constructor(comparator) {
        this.heap=[]
        this.comparator=comparator||this.defaultComparator
    }
    defaultComparator(a,b){
        if(typeof a==='number' || typeof b==='number'){
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
        return this.size() === 0
    }

    swap(a,b){
        let temp=this.heap[a]
        this.heap[a]=this.heap[b]
        this.heap[b]=temp
    }

    compare(a,b){
        return this.comparator(this.heap[a],this.heap[b])
    }

    enq(val){
        var size = this.heap.push(val);
        var current = size - 1;

        while (current > 0) {
            var parent = Math.floor((current - 1) / 2);

            if (this.compare(current, parent) <= 0) break;

            this.swap(parent, current);
            current = parent;
        }

        return size;
    }

    deq(){
        var first = this.heap[0];
        var last = this.heap.pop();
        var size = this.size();

        if (size === 0) return first;

        this.heap[0] = last;
        var current = 0;

        while (current < size) {
            var largest = current;
            var left = (2 * current) + 1;
            var right = (2 * current) + 2;

            if (left < size && this.compare(left, largest) >= 0) {
                largest = left;
            }

            if (right < size && this.compare(right, largest) >= 0) {
                largest = right;
            }

            if (largest === current) break;

            this.swap(largest, current);
            current = largest;
        }

        return first;
    }

}

let [N,M,K]=input[0].split(' ').map(Number)

//정점 N, 도로 M, 포장도로 K

let graph=new Array(N+1).fill().map(()=>{
    return new Array()
})



let minHeap=new MinHeap(function (a,b){
    return b[0]-a[0]
})

for(let i=1;i<1+M;i++){
    let [u,v,w]= input[i].split(' ').map(Number)

    graph[u].push([w,v]) // 거리,노드 순으로 저장
    graph[v].push([w,u])
}


let INF=1e17
//distance 는 정점 개수만큼
let distance=new Array(N+1).fill().map(()=>{
    return new Array(K+1).fill(INF)
})

minHeap.enq([0,1,0]) //가중치,노드,포장횟수
distance[1]=0



while(minHeap.size()!==0){
    let [dist,now,pave]=minHeap.deq()
    if(distance[now][pave]<dist){
        continue
    }
    for(let i=0;i<graph[now].length;i++){
        let [w,node]=graph[now][i]

        if(distance[node][pave]>dist+w){
            distance[node][pave]=dist+w
            minHeap.enq([dist+w,node,pave])
        }
        if(pave<K && dist<distance[node][pave+1]){
            distance[node][pave+1]=dist
            minHeap.enq([dist,node,pave+1])
        }



    }
}



console.log(Math.min(...distance[N]));