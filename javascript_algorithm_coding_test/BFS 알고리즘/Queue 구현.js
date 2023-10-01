fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')

class Queue{
    constructor() {
        this.items={};
        this.headIndex=0;
        this.tailIndex=0;
    }
    enqueue(item){
        this.items[this.tailIndex]=item;
        this.tailIndex++;
    }
    dequeue(){
        const item=this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    peek(){
        return this.items[this.headIndex];
    }
    getLength(){
        return this.tailIndex-this.headIndex;
    }
}

queue=new Queue();

queue.enqueue(5)
queue.enqueue(3)
queue.dequeue()

while(queue.getLength()!=0){
    console.log(queue.dequeue())
}