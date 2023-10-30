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
        let value=this.items[this.headIdx]
        delete this.items[this.headIdx]
        this.headIdx++
        return value
    }
    getLength(){
        return this.tailIdx-this.headIdx
    }
}


let [A,B]=inputV[0].split(' ').map(Number)

let queue=new Queue()
let visited=new Set()

queue.enqueue([A,0])
visited.add(A)
let result=-1
while(queue.getLength()!==0){
    let [val,cnt]=queue.dequeue()
    if(val===B){
        result=cnt+1
        break
    }

    let newVal1=2*val
    let newVal2=parseInt(val.toString()+'1')

    if(newVal1<=1e9){
        if(!visited.has(newVal1)){
            visited.add(newVal1)
            queue.enqueue([newVal1,cnt+1])
        }
    }
    if(newVal2<=1e9) {
        if (!visited.has(newVal2)) {
            visited.add(newVal2)
            queue.enqueue([newVal2,cnt+1])
        }
    }
}

console.log(result)