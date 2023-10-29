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

let [N,M]=inputV[0].split(' ').map(Number)
graph=[]
for (let i=0;i<=N;i++){
    graph[i]=[]
}
for(let i=1;i<=N;i++){
    graph[i-1]=inputV[i].split(' ').map(Number)
}

let dirX=[1,-1,0,0]
let dirY=[0,0,1,-1]



let time=0
let flag=true
while(flag) {
    let visited=Array.from(Array(N),()=>{
        return Array(M)
    })

    let queue=new Queue()

    queue.enqueue([0,0])
    visited[0][0]=true

    while (queue.getLength() !== 0) {
        let [valX, valY] = queue.dequeue()


        if (graph[valX][valY] === 0) {
            for (let i = 0; i < 4; i++) {
                let newX = valX + dirX[i]
                let newY = valY + dirY[i]
                if (newX < 0 || newY < 0 || newX >= N || newY >= M) {
                    continue
                }

                if (graph[newX][newY] >= 1) {
                    graph[newX][newY]++
                } else { //공기일때만 큐에 넣음
                    if(visited[newX][newY]){
                        continue
                    }
                    visited[newX][newY]=true
                    queue.enqueue([newX, newY])
                }
            }
        }
    }

    meltingCheese()
    time++
    if (isAllRemoved()) {
        flag=false
        break
    }
}

console.log(time)

function meltingCheese(){
    for(let e=0;e<N;e++){
        for(let ey=0;ey<M;ey++){
            if(graph[e][ey]>=3){
                //없어져야할 치즈
                graph[e][ey]=0
            }else if(graph[e][ey]===2){
                graph[e][ey]=1
            }
        }
    }
}



function isAllRemoved(){
    let cheese=0
    for(let cx=0;cx<N;cx++){
        for(let cy=0;cy<M;cy++){
            if(graph[cx][cy]>=1){
                cheese++
            }
        }
    }
    if(cheese===0){
        return true
    }else{
        return false
    }
}
