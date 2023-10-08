fs=require('fs')
let inputPath=process.platform==='linux'?'/dev/stdin':'testCase.txt'
let inputV=fs.readFileSync(inputPath).toString().split('\n')



class Queue{
    headIdx=0
    tailIdx=0
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

let [s,t]=inputV[0].split(' ').map(Number)

if(s===t){
    console.log(0)
    return 0
}

let oper=['*','+','-','/']
let queue=new Queue()
let visited= {}

queue.enqueue([s,''])
visited[s]=true
let ans=''

while(queue.getLength()!==0){
    let [val,operStr]=queue.dequeue()

    if(val===t){
        ans=operStr
        break
    }
    for(let i=0;i<4;i++){
        let newVal
        if(oper[i]==='*'){
            newVal=val*val
        }else if(oper[i]==='+'){
            newVal=val+val
        }else if(oper[i]==='-'){
            newVal=val-val
        }else{
            if(val!==0){
                newVal=val/val
            }
        }
        if(newVal>1e9 || newVal<1){
            continue
        }
        if(newVal in visited){
            continue
        }
        queue.enqueue([newVal,operStr+oper[i]])
        visited[newVal]=true
    }
}

if(ans!==''){
    console.log(ans)
}else{
    console.log(-1)
}