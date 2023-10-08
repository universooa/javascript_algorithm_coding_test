fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

class Queue{
    headIdx=0;
    tailIdx=0;
    arr={}
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
let dirX=[-1,-2,-2,-1,1,2,2,1]
let dirY=[-2,-1,1,2,-2,-1,1,2]
let ans=''
while(tc--){
    let l=Number(inputV[idx])
    let [curX,curY]=inputV[idx+1].split(' ').map(Number)
    let [trgX,trgY]=inputV[idx+2].split(' ').map(Number)
    let visited=Array.from(Array(l),()=>{
        return Array(l).fill(false)
    })
    let queue=new Queue()
    queue.enqueue([curX,curY,0])
    visited[curX][curY]=true
    let flag=true
    while(queue.getLength()!==0 &&flag){
        let [valX,valY,cnt]=queue.dequeue()
        // console.log(valX,valY,cnt)
        if(valX===trgX && valY===trgY){
            ans+=`${cnt}\n`
            flag=false
            break;
        }
        for(let i=0;i<8;i++){
            let newX=valX+dirX[i]
            let newY=valY+dirY[i]
            if(newX<0 || newY<0 || newX>=l ||newY>=l){
                continue
            }
            if(visited[newX][newY]){
                continue
            }

            visited[newX][newY]=true
            queue.enqueue([newX,newY,cnt+1])
        }
    }

    idx+=3
}

console.log(ans)