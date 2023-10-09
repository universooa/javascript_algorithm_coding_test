fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath,"utf8").trim().split('\n')

class Queue{
    constructor() {
        this.headIdx=0
        this.tailIdx=0
        this.items={}
    }
    enqueue(item){
        this.items[this.tailIdx]=item
        this.tailIdx++
    }
    dequeue(){
        let item=this.items[this.headIdx]
        delete this.items[this.headIdx]
        this.headIdx++
        return item
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }
}

let [N,K]=inputV[0].split(' ').map(Number)
let graph=[]
let vrsLoc={}
for(let i=1;i<=N;i++){
    let temp=inputV[i].split(' ').map(Number)
    for(let ij=0;ij<N;ij++){
        if(temp[ij]!==0){
            if(temp[ij] in vrsLoc){
                vrsLoc[temp[ij]].push([i-1,ij])
            }
            else{
                vrsLoc[temp[ij]]=[]
                vrsLoc[temp[ij]].push([i-1,ij])
            }
        }
    }
    graph.push(temp)
}
let [S,X,Y]=inputV[inputV.length-1].split(' ').map(Number)
let queue=new Queue()
let dirX=[-1,1,0,0]
let dirY=[0,0,-1,1]
let visited=Array.from(Array(N),()=>{
    return Array(N).fill(false)
})

for(let vrs=1;vrs<=K;vrs++){
    if(vrs in vrsLoc){
        for(let vrsItem of vrsLoc[vrs]){
            visited[vrsItem[0]][vrsItem[1]]=true
            queue.enqueue([vrsItem[0],vrsItem[1],0])
        }
        vrsLoc[vrs]=[]
    }
}

while(queue.getLength()!==0){
    let [valX,valY,time]=queue.dequeue()
    if(time===S){
        break
    }
    for(let mov=0;mov<4;mov++){
        let newValX=valX+dirX[mov]
        let newValY=valY+dirY[mov]
        if(newValX<0 ||newValY<0 ||newValX>=N||newValY>=N){
            continue
        }
        if(visited[newValX][newValY]){
            continue
        }
        graph[newValX][newValY]=graph[valX][valY]
        queue.enqueue([newValX,newValY,time+1])
        visited[newValX][newValY]=true
    }
}

console.log(graph[X-1][Y-1])