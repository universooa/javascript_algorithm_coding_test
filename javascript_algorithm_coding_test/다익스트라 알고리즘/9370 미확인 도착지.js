fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')


class minHeap{

    constructor() {
        this.arr={}
        this.start=1
        this.end=1
    }
    getLength(){
        return this.end-this.start
    }
    compare(a,b){
        return this.arr[a][0]-this.arr[b][0]
    }
    heapify(x){
        if(this.getLength()===0){
            this.arr[this.end++]=x
            return
        }

        this.arr[this.end]=x

        let cur=this.end
        let parent=Math.floor(cur/2)

        while(this.start<=parent){

            if(this.compare(parent,cur)>0){
                [this.arr[parent],this.arr[cur]]=[this.arr[cur],this.arr[parent]]
            }else{
                break
            }

            cur=parent
            parent=Math.floor(cur/2)
        }

        this.end++

    }
    heappop(){

        if(this.getLength()===0){
            return
        }

        let top=this.arr[this.start]

        if(this.getLength()===1){
            this.end--
            delete this.arr[this.end]
            return top
        }

        this.end--
        this.arr[this.start]=this.arr[this.end]
        delete this.arr[this.end]

        let cur=this.start
        let left=cur*2
        let right=cur*2+1

        while(left<=this.end-1){
            let minChild=left
            if(right<this.end-1 && this.compare(left,right)>0){
                minChild=right
            }

            if(this.compare(cur,minChild)>0){
                [this.arr[cur],this.arr[minChild]]=[this.arr[minChild],this.arr[cur]]
            }else{
                break
            }

            cur=minChild
            left=cur*2
            right=cur*2+1
        }

        return top

    }


}


let tc=Number(input[0])

let idx=1
let caseNo=0
let answer=''
let infNo=1e9
while(true){

    if(caseNo===tc){
        break
    }


    let [n,m,t]=input[idx++].split(' ').map(Number)
    let [s,g,h]=input[idx++].split(' ').map(Number)

    graph=new Array(n+1).fill().map(()=>new Array())


    let curd=-1

    for(let i=idx;i<idx+m;i++){
        let [a,b,d]=input[i].split(' ').map(Number)
        if(a===g && b===h || b===g && a===h){
            curd=d
        }
        graph[a].push([b,d])
        graph[b].push([a,d])
    }
    idx+=m

    let dest=[]
    for(let j=idx;j<idx+t;j++){
        let x=Number(input[j])
        dest.push(x)
    }
    idx+=t

    let sVisited=dijkstra(s,n)


    let hVisited=dijkstra(h,n)
    let gVisited=dijkstra(g,n)

    let result=[]
    for(let dt of dest){

        if(sVisited[dt]===infNo || curd===infNo){
            continue
        }
        if(sVisited[g]!==infNo &&hVisited[dt]!==infNo && sVisited[dt]===sVisited[g]+curd+hVisited[dt]){
            result.push(dt)
        }else if(  gVisited[dt]!==infNo && sVisited[h]!==infNo &&sVisited[dt]===sVisited[h]+curd+gVisited[dt]){
            result.push(dt)
        }
    }

    answer+=`${result.sort((a,b)=>a-b).join(' ')}\n`


    caseNo++

}

console.log(answer)


function dijkstra(s,n){
    let visited=new Array(n+1).fill(infNo)

    let heap=new minHeap()
    heap.heapify([s,0])
    visited[s]=0

    while(heap.getLength()!==0){
        let [val,dist]=heap.heappop()

        for(let [node,ndist] of graph[val]){
            if(visited[node]>dist+ndist){
                visited[node]=dist+ndist
                heap.heapify([node,dist+ndist])
            }
        }


    }
    return visited
}