fs=require('fs')
let inputPath=process.platform==='linux'?0:'testCase.txt'
let input=fs.readFileSync(inputPath,"utf8").trim().replaceAll('\r','').split('\n')

class Queue{
    constructor() {
        this.arr={}
        this.start=0
        this.end=0
    }
    getLength(){
        return this.end-this.start
    }
    enqueue(x){
        this.arr[this.end++]=x
    }
    dequeue(){
        let top=this.arr[this.start]
        delete this.arr[this.start++]
        return top
    }

}

let N,K
[N,K]=input[0].split(' ').map(Number)
let maxVal=100000
let arr=new Array(maxVal+1).fill(false)

arr[N]=true
let queue=new Queue()
queue.enqueue([N,0])
oper=[0,-1,1]
while(queue.getLength()!==0){
    let [val,time]=queue.dequeue()
    if(val===K){
        console.log(time)
        break
    }

    for(let i=0;i<3;i++){
        let nv=val
        if(i===0){
            nv=nv*2
        }
        else{
            nv=nv+oper[i]
        }

        if(nv<0 || nv>maxVal || arr[nv]){
            continue
        }

        if(i===0){
            queue.enqueue([nv,time])
        }else{
            queue.enqueue([nv,time+1])
        }
        arr[nv]=true


    }



}


