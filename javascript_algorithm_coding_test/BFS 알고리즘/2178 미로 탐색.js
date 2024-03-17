fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

class Queue{
    constructor() {
        this.arr={}
        this.start=1
        this.end=1
    }
    getLength(){
        return this.end-this.start
    }
    enqueue(x){
        this.arr[this.end++]=x
    }
    dequeue(){
        if(this.getLength()===0){
            return
        }

        let top=this.arr[this.start]
        delete this.arr[this.start++]
        return top
    }
}


let N,M
[N,M]=input[0].split(' ').map(Number)
let visited=Array.from(Array(N),()=>{
    return new Array(M).fill(false)
})
let arr=[]

for(let i=1;i<=N;i++){
    arr.push(input[i].split('').map(Number))
}

dx=[0,0,-1,1]
dy=[-1,1,0,0]
result=1e5
queue=new Queue()

bfs(0,0,1)
console.log(result)

function bfs(x,y,depth){

    visited[x][y]=true
    queue.enqueue([x,y,depth])

    while(queue.getLength()!==0){
        let [cx,cy,depth]=queue.dequeue()

        if(cx===N-1&&cy===M-1){
            result=depth
            break
        }

        for(let i=0;i<4;i++){
            let nx=cx+dx[i]
            let ny=cy+dy[i]
            if(nx<0 || ny<0 || nx>=N || ny>=M){
                continue
            }

            if(!visited[nx][ny] && arr[nx][ny]===1){
                visited[nx][ny]=true
                queue.enqueue([nx,ny,depth+1])
            }
        }
    }



}
