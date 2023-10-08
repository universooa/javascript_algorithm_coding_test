fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

class Queue{
    headIdx=0
    tailIdx=0
    arr={}
    constructor() {
        this.headIdx=0
        this.tailIdx=0
        this.arr={}
    }
    enqueue(item){
        this.arr[this.tailIdx]=item
        this.tailIdx++
    }
    dequeue(){
        let item=this.arr[this.headIdx]
        delete this.arr[this.headIdx]
        this.headIdx++
        return item
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }
}

let tc=Number(inputV[0])
let idx=1
let ans=''
while(tc--){
    let [V,E]=inputV[idx].split(' ').map(Number)
    let graph=Array.from(Array(V+1),()=>{
        return []
    })
    for(let i=0;i<E;i++){
        idx++
        let [start,end]=inputV[idx].split(' ').map(Number)
        graph[start].push(end)
        graph[end].push(start)
    }

    let queue=new Queue()
    let visited=new Array(V+1).fill(-1)
    let flag=true

    for(let j=1;j<V+1;j++){
        if(visited[j]!==-1){
            continue
        }
        queue.enqueue(j)
        visited[j]=1

        while(queue.getLength()!==0&&flag ){
            let val=queue.dequeue()

            for(let vertex of graph[val]){
                if(visited[vertex]!==-1){
                    //이미 방문을 한 노드인데 인접한 노드가 나와 색깔이 같으면
                    //이분 그래프가 아님
                    if(visited[val]===visited[vertex]){
                        flag=false
                        break
                    }
                    continue
                }
                queue.enqueue(vertex)
                visited[vertex]=(visited[val]+1)%2
            }
        }
    }

    if(flag){
        ans+=`YES\n`
    }else{
        ans+=`NO\n`
    }
    idx++
}

console.log(ans)