const fs=require('fs')
let local='../test.txt'
let remote='/dev/stdin'

let inputPath=process.platform==='linux' ? remote:local

const input=fs.readFileSync(inputPath,"utf-8").trim().split('\n')

class MinHeap{
    constructor(comparator) {
        this.heap=[null]
        this.comparator=comparator||this.defaultComparator
    }

    defaultComparator(a,b){
        if(typeof a==='number'&&typeof b==='number'){
            return a-b
        }else{
            a=a.toString()
            b=b.toString()

            if(a===b){
                return 0
            }
            return a>b?1:-1
        }
    }
    compare(a,b){
        return this.comparator(this.heap[a],this.heap[b])
    }

    getSize(){
        return this.heap.length-1
    }

    swap(a,b){
        let temp=this.heap[a]
        this.heap[a]=this.heap[b]
        this.heap[b]=temp
    }
    enqueue(val){
        let current=this.heap.push(val)-1


        while(current>1){
            let parent=Math.floor(current/2)
            if(this.compare(parent,current)>0){
                this.swap(current,parent)
                current=parent
            }else{
                break
            }
        }


    }

    dequeue(){
        let minVal=this.heap[1]
        this.heap[1]=this.heap[this.heap.length-1]

        let size=this.heap.length
        if(size>2){
            this.heap.splice(this.heap.length-1)
            //heapify
            let current=1
            let leftChildIdx=current*2
            let rightChildIdx=current*2+1

            while(this.heap[leftChildIdx]){
                let compareIdx=leftChildIdx
                if(this.heap[rightChildIdx]&& this.compare(compareIdx,rightChildIdx)>0){
                    compareIdx=rightChildIdx
                }

                if(this.compare(current,compareIdx)>0){
                    this.swap(current,compareIdx)
                    current=compareIdx
                }else{
                    break
                }

                leftChildIdx=current*2
                rightChildIdx=current*2+1
            }


        }else if(size===2){
            this.heap.splice(1,1)
        }else{
            return null
        }

        return minVal
    }
}

let minHeap=new MinHeap(function(a,b){
    return a[0]-b[0]
})

let [V,E]=input[0].split(' ').map(Number)
let sv=Number(input[1])
let INF=1e9

let graph=Array.from(Array(V+1),()=>new Array())
let distance=new Array(V+1).fill(INF)

for(let i=2;i<2+E;i++){
    let [u,v,w] = input[i].split(' ').map(Number)
    graph[u].push([w,v])
}

minHeap.enqueue([0,sv])
distance[sv]=0

while(minHeap.getSize()!==0){
    let [dist,node]=minHeap.dequeue()
    if(distance[node]< dist){ // 이미 계산됨
        continue
    }
    for(let j=0;j<graph[node].length;j++){
        let [w,conNode]=graph[node][j]
        if(distance[conNode]> dist+w){

            minHeap.enqueue([dist+w,conNode])
            distance[conNode]=dist+w
        }
    }

}

let ret=''
for(let i=1;i<=V;i++){
    if(distance[i]===INF){
        ret+='INF\n'
    }else{
        ret+=`${distance[i]}\n`
    }
}
console.log(ret)